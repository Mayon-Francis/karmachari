import React from "react";
import CustomTitle from "@/utils/customTitle";
import { districts, schools } from "@/configs";
import styles from "@/styles/student/Registration.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";

function RegistrationStatus() {
  const [enrollmentId, setEnrollmentID] = React.useState("");

  const handleSubmit = () => {
    if (enrollmentId === "") {
      toast.error("Enrollment ID is required");
      return;
    }

    console.log({
      enrollmentId: enrollmentId,
    });
    handleReset();
  };
  const handleReset = () => {
    setEnrollmentID("");
  };
  return (
    <>
      <CustomTitle title="Student Registration Status" />
      <div className={styles.registration__container}>
        <div className={styles.registration__heading}>REGISTRATION STATUS</div>
        <div className={styles.registration__form}>
          <div className={styles.registration__form__section}>
            <div className={styles.registration__form__section__heading}>
              Enrollment Details
            </div>
            <div className={styles.registration__form__section__fields}>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Enrollment ID*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="text"
                    value={enrollmentId}
                    onChange={(e) => {
                      setEnrollmentID(e.target.value);
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
            <div
              className={styles.registration__form__section__heading}
              style={{
                borderRadius: "10px",
              }}
            >
              PENDING..
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationStatus;
