import { Dialog, DialogContent } from "@mui/material";
import styles from "../DeleteConfirmationModal/DeleteConfirmationModal.module.css";
import { useState } from "react";

function ForgotPasswordModal({ open, handleClose }) {
  const [email, setEmail] = useState("");
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
      <DialogContent sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            <div className={styles.loginCard__body__title__text__text}>
              Enter Your Email Address
            </div>
            <div className={styles.loginCard__body__title__text__text__subtext}>
              *We will send you a link to reset your password
            </div>
            <div className={styles.loginCard__body__title__text__text__input}>
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div
            className={styles.login_btn}
            onClick={() => {
              handleClose();
            }}
            sx={{ mt: 2 }}
          >
            Confirm
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ForgotPasswordModal;
