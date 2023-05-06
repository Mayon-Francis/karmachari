import React from "react";
import CustomTitle from "@/utils/customTitle";
import { districts } from "@/configs";
import styles from "@/styles/student/Registration.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";
import {handleRegister} from "@/utils/requests"

function SchoolRegistration() {
  const [principalName, setPrincipalName] = React.useState("");
  const [schoolName, setSchoolName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [district, setDistrict] = React.useState(
    districts[0] || "Select District"
  );
  const [eoiLetter, setEoiLetter] = React.useState("");

  const handleSubmit = async () => {
    if (principalName === "") {
      toast.error("Please enter Principal's Name");
      return;
    }
    if (schoolName === "") {
      toast.error("Please enter School Name");
      return;
    }
    if (phoneNumber === "") {
      toast.error("Please enter Phone Number");
      return;
    }
    if (email === "") {
      toast.error("Please enter Email");
      return;
    }
    if (district === "") {
      toast.error("Please select District");
      return;
    }
    if (eoiLetter === "") {
      toast.error("Please upload EOI Letter");
      return;
     
    }
        console.log({
          name: principalName,
          phoneNumber: phoneNumber,
          email: email,
        });
        let data = {
          principal: principalName,
          name: schoolName,
          phone: phoneNumber,
          email: email,
          district: district,
          eol_letter: 'eoiLetter',
        }
        await handleRegister(data, "school");                                                  
      
      
    
    

    handleReset();
  };

  const handleReset = () => {
    setPrincipalName("");
    setSchoolName("");
    setPhoneNumber("");
    setEmail("");
    setDistrict(districts[0] || "Select District");
    setEoiLetter("");
    document.getElementById("eoiLetter").value = "";
  };

  return (
    <>
      <CustomTitle title="School Registration" />
      <div className={styles.registration__container}>
        <div className={styles.registration__heading}>SCHOOL REGISTRATION</div>
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
                  Principal's Name*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="text"
                    value={principalName}
                    onChange={(e) => setPrincipalName(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  School Name*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
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
          <div className={styles.registration__form__section}>
            <div className={styles.registration__form__section__heading}>
              Academic Details & Residence*
            </div>
            <div className={styles.registration__form__section__fields}>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  District*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <select
                    name="district"
                    id="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    {districts.map((district) => (
                      <option value={district}>{district}</option>
                    ))}
                  </select>
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
                  EOI Letter*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="file"
                    id="eoiLetter"
                    onChange={(e) => setEoiLetter(e.target.files[0])}
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

export default SchoolRegistration;
