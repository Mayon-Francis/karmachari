import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import styles from "../EditStudentProfileModal/EditStudentProfileModal.module.css";
import { districts, jobCategories, schools } from "@/configs";
import { AiFillEdit, AiFillEye, AiOutlineArrowRight } from "react-icons/ai";

function ViewMessagesModal({ open, handleClose }) {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [gstNumber, setGstNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [category, setCategory] = React.useState(
    jobCategories[0] || "Select Category"
  );
  const [jobType, setJobType] = React.useState("Select Job Type");
  const [district, setdistrict] = React.useState("Select District");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");
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
        <div className={styles.title}>Inquiry</div>
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
            <div className={styles.field}>
              <div className={styles.input__label}>Message</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <textarea
                rows={10}
                  disabled
                  style={{ resize: "none" }}
                  value={name || "Pariatur nostrud tempor tempor amet in fugiat anim. Pariatur dolor in magna sunt irure officia. Ullamco velit nulla tempor minim id culpa voluptate sint proident ea quis adipisicing."}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            {/* <div className={styles.field}>
              <div className={styles.input__label}>District</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <select name="district" id="district" value={district.label}>
                  {districts.map((district) => (
                    <option value={district} >{district}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.input__label}>Type</div>
              <div className={styles.loginCard__body__title__text__text__input}>
                <select name="jobtype" id="jobtype" value={jobType.label}> 
                    <option value="On-site" onSelect={()=>{setJobType("On-site")}}>On-site</option>
                    <option value="Work from Home" onSelect={()=>{setJobType("Work from Home")}}>Work from Home</option>
                </select>
              </div>
            </div> */}
          </div>
          <div className={styles.registration__form__register}>
            {/* <div
              className={styles.registration__form__register__button}
              onClick={() => {
                handleClose();
              }}
            >
              Edit<AiFillEdit />
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewMessagesModal;
