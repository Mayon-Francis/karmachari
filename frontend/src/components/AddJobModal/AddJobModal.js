import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import styles from "../EditStudentProfileModal/EditStudentProfileModal.module.css";
import { districts, jobCategories, schools } from "@/configs";
import { AiOutlineArrowRight } from "react-icons/ai";
import userContext from "@/contexts/userContext";
import { handleFetch, handlePost } from "@/utils/requests";

function AddJobModal({ open, handleClose }) {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [gstNumber, setGstNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [category, setCategory] = React.useState(
    jobCategories[0] || "Select Category"
  );
  const [jobType, setJobType] = React.useState("Select Job Type");
  const [district, setdistrict] = React.useState(
    districts[0] || "Select District"
  );
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { user, userData } = React.useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      company_name: userData.name,
      company_id: userData._id,
      contact_email: email,
      phone_no: phoneNumber,
      description: description,
      role: name,
      category: category,
      location: district,
    };
    handleClose();
    await handlePost(user.accessToken, data, "jobs");
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
        <div className={styles.title}>Add Job</div>
      </DialogTitle>
      <DialogContent
        sx={{ "&::-webkit-scrollbar": { display: "none" }, padding: 0 }}
      >
        <form onSubmit={handleSubmit}>
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
                <div className={styles.input__label}>Job Title</div>
                <div
                  className={styles.loginCard__body__title__text__text__input}
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <div className={styles.input__label}>Contact Number</div>
                <div
                  className={styles.loginCard__body__title__text__text__input}
                >
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.input__label}>Email</div>
                <div
                  className={styles.loginCard__body__title__text__text__input}
                >
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.input__label}>District</div>
                <div
                  className={styles.loginCard__body__title__text__text__input}
                >
                  <select
                    name="district"
                    id="district"
                    value={district.label}
                    onChange={(e) => {
                      setdistrict(e.target.value);
                    }}
                  >
                    {districts.map((district) => (
                      <option value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.input__label}>Type</div>
                <div
                  className={styles.loginCard__body__title__text__text__input}
                >
                  <select name="jobtype" id="jobtype" value={jobType.label}>
                    <option
                      value="On-site"
                      onSelect={() => {
                        setJobType("On-site");
                      }}
                    >
                      On-site
                    </option>
                    <option
                      value="Work from Home"
                      onSelect={() => {
                        setJobType("Work from Home");
                      }}
                    >
                      Work from Home
                    </option>
                  </select>
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.input__label}>Category</div>
                <div
                  className={styles.loginCard__body__title__text__text__input}
                >
                  <select name="category" id="category" value={category}>
                    {jobCategories.map((category) => (
                      <option value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.input__label}>Description</div>
                <div
                  className={styles.loginCard__body__title__text__text__input}
                >
                  <textarea
                    type="text"
                    rows="7"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={styles.registration__form__register}>
              <button
                className={styles.registration__form__register__button}
                type="submit"
              >
                Add
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddJobModal;
