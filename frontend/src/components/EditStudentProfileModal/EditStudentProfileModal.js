import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import styles from "./EditStudentProfileModal.module.css";
import { districts, schools } from "@/configs";
import { AiOutlineArrowRight } from "react-icons/ai";

function EditStudentProfileModal({ open, handleClose }) {
  const [name, setName] = React.useState("");
  const [parentName, setParentName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [emergency, setEmergency] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [school, setSchool] = React.useState(schools[0] || "Select School");
  const [district, setDistrict] = React.useState(
    districts[0] || "Select District"
  );
  const [bio, setBio] = React.useState("");
  const [address, setAddress] = React.useState("");

  

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
              <div className={styles.input__label}>Name</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>
                Father's / Mother's Name
              </div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label} disabled>
                Date of Birth
              </div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input
                  type="date"
                  disabled
                  value={dob}
                />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>Phone Number</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input type="text" disabled value={phone} />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>
                Emergency Contact Number
              </div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input
                  type="text"
                  value={emergency}
                  onChange={(e) => setEmergency(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>Email</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <input type="text" disabled value={email} />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>School</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <select name="school" id="school" disabled value={school}>
                  {schools.map((school) => (
                    <option value={school} key={school}>{school}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>District</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <select name="district" id="district" value={district} onChange={(e)=>{setDistrict(e.target.value)}}>
                  {districts.map((district) => (
                    <option value={district} key={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>Bio</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <textarea
                  type="text"
                  rows="7"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>Address</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <textarea
                  type="text"
                  rows="7"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                ></textarea>
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

export default EditStudentProfileModal;
