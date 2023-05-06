import React from "react";
import CustomTitle from "@/utils/customTitle";
import { districts, roles, schools } from "@/configs";
import styles from "@/styles/student/Registration.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";

function GrievancesForm() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState(roles[0] || "Select Role");
  const [message, setMessage] = React.useState("");

  const [additionalDocument, setAdditionalDocument] = React.useState("");

  const handleSubmit = () => {
    if (name === "") {
      toast.error("Name is required");
      return;
    }
    if (phone === "") {
      toast.error("Phone is required");
      return;
    }
    if (email === "") {
      toast.error("Email is required");
      return;
    }
    if (message === "") {
      toast.error("Message is required");
      return;
    }
    console.log({
      name: name,
      phone: phone,
      email: email,
      role: role,
      message: message,
      document: document,
    });
    handleReset();
  };
  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setAdditionalDocument("");
    document.getElementById("additionalDocument").value = "";
  };
  return (
    <>
      <CustomTitle title="Student Registration" />
      <div className={styles.registration__container}>
        <div className={styles.registration__heading}>GRIEVANCE FORM</div>
        <div className={styles.registration__form}>
          <div className={styles.registration__form__section}>
            <div className={styles.registration__form__section__heading}>
              Personal Details
            </div>
            <div className={styles.registration__form__section__fields}>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Name*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Phone Number*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Email*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.registration__form__section}>
            <div className={styles.registration__form__section__heading}>
              Additional Details
            </div>
            <div className={styles.registration__form__section__fields}>
              <div className={styles.registration__form__section__field__left}>
                <div className={styles.registration__form__section__field}>
                  <div
                    className={styles.registration__form__section__field__label}
                  >
                    Role*
                  </div>
                  <div
                    className={styles.registration__form__section__field__input}
                  >
                    <select
                      name="role"
                      id="role"
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    >
                      {roles.map((role) => (
                        <option value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Message*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <textarea
                    name="bio"
                    id="bio"
                    cols="30"
                    rows="7"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.registration__form__section}>
            <div className={styles.registration__form__section__heading}>
              Upload Documents
            </div>
            <div className={styles.registration__form__section__fields}>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  {"Documents (Optional)"}
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="file"
                    id="additionalDocument"
                    onChange={(e) => {
                      setAdditionalDocument(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.registration__form__register}>
            <div
              className={styles.registration__form__register__button}
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrievancesForm;
