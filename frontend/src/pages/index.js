import Loader from "@/components/Loader/Loader";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTitle from "@/utils/customTitle";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import UserContext from "@/contexts/userContext";
import { Button, IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";
import LoginRegModal from "@/components/LoginRegModal/LoginRegModal";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user, userLoading, userData,userError, logout } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function opeenLoginModal() {
    setOpen(true);
  }

  console.log(user, userLoading);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CustomTitle title="Home" />
      <LoginRegModal open={open} handleClose={handleClose} />
      <section className={styles.content__container} id="home">
        <div className={styles.section__heading}>
          <div className={styles.registration__heading__container}>
            <div className={styles.registration__heading}></div>
            <div className={styles.registration__heading__text}>
              KARMACHARI JOB PORTAL
            </div>
          </div>
          <div className={styles.homepage__continueButtons}>

            {userData ? <div
              className={styles.loginCard__body__button}
              onClick={() => {
                // router.push("/student");
                router.push("/"+userData?.roLe+"/dashboard");
              }}
            >
              View Dashboard
            </div>:
              <div
              className={styles.loginCard__body__button}
              onClick={() => {
                // router.push("/student");
                opeenLoginModal();
              }}
            >
              Login to Continue
            </div>}
            {/* <div
              className={styles.loginCard__body__button}
              onClick={() => {
                router.push("/student");
              }}
            >
              Continue as Student
            </div>
            <div
              className={styles.loginCard__body__button}
              onClick={() => {
                router.push("/company");
              }}
            >
              Continue as Company
            </div>
            <div
              className={styles.loginCard__body__button}
              onClick={() => {
                router.push("/school");
              }}
            >
              Continue as School
            </div>
            <div
              className={styles.loginCard__body__button}
              onClick={() => {
                router.push("/commission");
              }}
            >
              Continue as Commissioner
            </div>
            <div
              className={styles.loginCard__body__button}
              onClick={() => {
                router.push("/admin");
              }}
            >
              Continue as Admin
            </div> */}
          </div>
        </div>
        <div className={styles.section__content}>
          <div className={styles.content__main}>
            <section className={styles.content__aboutus} id="about">
              <div className={styles.content__heading}>About Us</div>
                Cillum sint quis aliqua id veniam do laboris Lorem consectetur
                ut consectetur. Deserunt officia pariatur eiusmod est duis in
                dolor. Aliqua cillum proident nisi cupidatat dolore aute laborum
                dolore veniam eiusmod sit consectetur. Non dolor fugiat irure
                velit velit cupidatat eiusmod voluptate laborum labore aliquip
                mollit. Pariatur consectetur cillum deserunt ipsum.
                <section className={styles.content__faq} id="faq">
              <div className={styles.content__heading}>FAQs</div>
              <div className={styles.accordion__container}>
                <Accordion className={styles.accordion__root}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.accordion__summary}
                  >
                    <Typography>Question 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordion__details}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordion__root}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.accordion__summary}
                  >
                    <Typography>Question 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordion__details}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordion__root}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={styles.accordion__summary}
                  >
                    <Typography>Question 3</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordion__details}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className={styles.accordion__root}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={styles.accordion__summary}
                  >
                    <Typography>Question 4</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordion__details}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </section>
            </section>
            
            <div className={styles.content__updates} id="updates">
              <div className={styles.updates__heading}>LATEST UPDATES</div>
              <div className={styles.updates__content}>
                <div className={styles.notification}>
                  <div className={styles.notification_dot}></div>
                  <Link
                    href={"https://www.google.com"}
                    passHref={true}
                    target="_blank"
                  >
                    <div className={styles.ticker_item} key={1}>
                      {"Testing..."}
                    </div>
                  </Link>
                </div>
                <div className={styles.notification}>
                  <div className={styles.notification_dot}></div>
                  <Link
                    href={"https://www.google.com"}
                    passHref={true}
                    target="_blank"
                  >
                    <div className={styles.ticker_item} key={2}>
                      {"Testing..."}
                    </div>
                  </Link>
                </div>
                <div className={styles.notification}>
                  <div className={styles.notification_dot}></div>
                  <Link
                    href={"https://www.google.com"}
                    passHref={true}
                    target="_blank"
                  >
                    <div className={styles.ticker_item} key={3}>
                      {"Testing..."}
                    </div>
                  </Link>
                </div>
                <div className={styles.notification}>
                  <div className={styles.notification_dot}></div>
                  <Link
                    href={"https://www.google.com"}
                    passHref={true}
                    target="_blank"
                  >
                    <div className={styles.ticker_item} key={4}>
                      {"Testing..."}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <section className={styles.content__contact} id="contact">
              <div className={styles.content__contactform}>
                <form className={styles.contact_form}>
                  <div className={styles.content__heading__contact}>
                    Contact Us
                  </div>
                  <div className={styles.form_input_container}>
                    <div className={styles.form_heading}>Name</div>
                    <input type={"text"} className={styles.form_input}></input>
                  </div>
                  <div className={styles.form_input_container}>
                    <div className={styles.form_heading}>Email id</div>
                    <input type={"text"} className={styles.form_input}></input>
                  </div>
                  <div className={styles.form_input_container}>
                    <div className={styles.form_heading}>Question for Us</div>
                    <textarea
                      type={"text"}
                      className={styles.form_input}
                    ></textarea>
                  </div>
                  <Button
                    className={styles.sendButton}
                    variant="contained"
                    endIcon={<ArrowForward />}
                  >
                    Send
                  </Button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
