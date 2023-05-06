import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Select } from "@mui/material";
import styles from "../EditStudentProfileModal/EditStudentProfileModal.module.css";
import { districts, jobCategories, schools } from "@/configs";
import { AiFillEdit, AiOutlineArrowRight } from "react-icons/ai";
import { BorderColor } from "@mui/icons-material";
import { useRouter } from "next/router";

function LoginRegModal({ open, handleClose }) {
  const [login, setLogin] = useState("");
  const logins = ["Others","School/College", "Official", "admin"];
  const router = useRouter();

  const handleChange = (event) => {
    setLogin(event.target.value);
    router.push(`/${event.target.value}`);
  };

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
        <div className={styles.login__title}>Continue as</div>
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
          <div className={styles.login__buttons}>
            <div
              className={styles.loginCard__body__button}
              onClick={() => {
                router.push("/student");
              }}
            >
              Student
            </div>
            <div
              className={styles.loginCard__body__button}
              onClick={() => {
                router.push("/company");
              }}
            >
              Employer
            </div>
            <div style={{ width: "150px", textAlign: "center" }}>
              {/* <FormControl fullWidth size="small">
                <InputLabel
                  sx={{
                    color: "#00487C",
                    fontWeight: "w500",
                  }}
                  id="demo-simple-select-label"
                >
                  Others
                </InputLabel>
                <Select
                  inputProps={{
                    MenuProps: {
                      MenuListProps: {
                        sx: {
                          color: "#00487C",
                          backgroundColor: "#C9E9FF",
                        },
                      },
                    },
                  }}
                  sx={{
                    height: "44px",
                    // color: 'white',
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "white",
                  }}
                  label="Others"
                  labelId="select-login-label"
                  id="select-login"
                  value={login}
                  onChange={handleChange}
                >
                  <option value="" default selected>Other</option>
                  {logins.map((job) => {
                    return (
                      <MenuItem value={job} key={job}>
                        {job.charAt(0).toUpperCase() + job.slice(1)}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl> */}
              <select
              className={styles.otherlogin__selector}
                  id="select-login"
                  value={login}
                  onChange={handleChange}>
              {logins.map((job) => {
                    return (
                      <option className={styles.otherlogin__options} value={job} key={job}>
                        {job.charAt(0).toUpperCase() + job.slice(1)}
                      </option>
                    );})}
              </select>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginRegModal;
