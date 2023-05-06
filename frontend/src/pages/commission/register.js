import React from "react";
import CustomTitle from "@/utils/customTitle";
import styles from "@/styles/student/Registration.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";
import {handleRegister} from "@/utils/requests"


function CommissionRegistration() {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = async () => {
     
    console.log({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    });
    let data = {
      name: name,
      phone_no: phoneNumber,   
      email: email,
    }
    await handleRegister(data, "commission");                                                  
    handleReset();
  };

  const handleReset = () => {
    setName("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <>
      <CustomTitle title="Commission Registration" />
      <div className={styles.registration__container}>
        <div className={styles.registration__heading}>
          COMMISSION REGISTRATION
        </div>
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
                    onChange={(e) => setName(e.target.value)}
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.registration__form__register}>
            <div
              className={styles.registration__form__register__button}
              onClick={handleSubmit}
            >
              Register <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommissionRegistration;
