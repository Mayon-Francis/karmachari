import React, { useContext } from "react";
import styles from "./LoginCard.module.css";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import ForgotPasswordModal from "../ForgotPasswordModal/ForgotPasswordModal";
import { handleLogin } from "@/utils/requests";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import usercontext from "@/contexts/userContext";

function LoginCard({ role }) {
  const { user, setUserData } = useContext(usercontext);
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        let res = await handleLogin(
          user.accessToken,
          router.pathname.split("/")[1]
        );
        localStorage.setItem("role", router.pathname.split("/")[1]);
        setUserData({ ...res, roLe: router.pathname.split("/")[1] });
        if (router.pathname.includes("admin")) {
          router.push("/admin/dashboard");
        } else if (router.pathname.includes("company")) {
          router.push("/company/dashboard");
        } else if (router.pathname.includes("commission")) {
          router.push("/commission/dashboard");
        } else if (router.pathname.includes("school")) {
          router.push("/school/dashboard");
        } else {
          router.push("/student/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Could not Login");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleLogin = () => {
  //   if (email === "") {
  //     toast.error("Email is required");
  //     return;
  //   }
  //   if (password === "") {
  //     toast.error("Password is required");
  //     return;
  //   }
  //};

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.loginCard}
      >
        <div className={styles.loginCard__header}>KARMACHARI JOB PORTAL</div>
        <div className={styles.loginCard__body}>
          <div className={styles.loginCard__body__title}>
            <div className={styles.loginCard__body__title__text}>
              <div className={styles.loginCard__body__title__text__text}>
                Email
              </div>
              <div className={styles.loginCard__body__title__text__input}>
                <input
                  type="text"
                  required
                  placeholder="Type your Email here"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className={styles.loginCard__body__title__text}>
              <div className={styles.loginCard__body__title__text__text}>
                Password
              </div>
              <div className={styles.loginCard__body__title__text__input}>
                <input
                  type="password"
                  placeholder="Type your password here"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <button className={styles.loginCard__body__button} type="submit">
            Login
          </button>
        </div>
        <div className={styles.loginCard__footer}>
          <div
            className={styles.loginCard__footer__text}
            style={{
              cursor: "pointer",
            }}
            onClick={() => setOpen(true)}
          >
            Forgot Password?
          </div>
          {router.pathname.includes("admin") ? (
            ""
          ) : (
            <>
              <div className={styles.loginCard__footer__text}>
                New to Karmachari Job Portal?
              </div>
              <div
                className={styles.loginCard__footer__button}
                onClick={() => {
                  router.pathname.includes("student")
                    ? router.push("/student/register")
                    : router.pathname.includes("company")
                    ? router.push("/company/register")
                    : router.pathname.includes("commission")
                    ? router.push("/commission/register")
                    : router.push("/school/register");
                }}
              >
                Register Now
              </div>
            </>
          )}
        </div>
      </form>
      <ForgotPasswordModal open={open} handleClose={handleClose} />
    </>
  );
}

export default LoginCard;
