import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import styles from "../EditStudentProfileModal/EditStudentProfileModal.module.css";
import { districts, schools } from "@/configs";
import { AiOutlineArrowRight } from "react-icons/ai";

function EditSchoolProfileModal({ open, handleClose }) {
  const [principalName, setPrincipalName] = React.useState("");
  const [schoolName, setSchoolName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [district, setDistrict] = React.useState(
    districts[0] || "Select District"
  );

  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "#c9e9ff",
          color: "#00487c",
          borderRadius: "1rem",
          padding: "1rem",
          fontFamily: "Mulish",
        },
      }}
      BackdropProps={{
        style: {
          opacity: 0.5,
          background:
            "linear-gradient(90deg, #0C4C82 -13.51%, #0D4F84 -12.59%, #187BA2 5.14%, #1F9BB8 20.99%, #24AFC5 34.24%, #26B6CA 43.28%, #30B9C7 50.27%, #4DBFBE 62.37%, #7ACBAF 78.1%, #B1D89E 94.53%)",
        },
      }}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className={styles.title}>Edit Profile</div>
      </DialogTitle>
      <DialogContent
        sx={{ "&::-webkit-scrollbar": { display: "none" }, padding: 0 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          <div className={styles.fields}>
            <div className={styles.field}>
              <div className={styles.input__label}>Principal's Name</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input
                  type="text"
                  value={principalName}
                  onChange={(e) => setPrincipalName(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>School Name</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input type="text" disabled value={schoolName} />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>Phone Number</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input type="text" disabled value={phoneNumber} />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>Email</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input type="text" disabled value={email} />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>District</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <select name="district" id="district" value={district}>
                  {districts.map((district) => (
                    <option value={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className={styles.registration__form__register}>
            <div
              className={styles.registration__form__register__button}
              onClick={() => {
                handleClose();
              }}
            >
              Update <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditSchoolProfileModal;
