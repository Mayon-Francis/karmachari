import React from "react";
import CustomTitle from "@/utils/customTitle";
import { districts, jobCategories } from "@/configs";
import styles from "@/styles/student/Registration.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";
import {handleRegister} from "@/utils/requests"


function CompanyRegistration() {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [gstNumber, setGstNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [category, setCategory] = React.useState(
    jobCategories[0] || "Select Category"
  );
  const [district, setDistrict] = React.useState(
    districts[0] || "Select District"
  );
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [certificate, setCertificate] = React.useState("");
  const [logo, setLogo] = React.useState("");

  const handleSubmit = async() => {
    if (name === "") {
      toast.error("Please enter Name");
      return;
    }
    if (phoneNumber === "") {
      toast.error("Please enter Phone Number");
      return;
    }
    if (gstNumber === "") {
      toast.error("Please enter GST Number");
      return;
    }
    if (email === "") {
      toast.error("Please enter Email");
      return;
    }
    if (category === "") {
      toast.error("Please select Category");
      return;
    }
    if (district === "") {
      toast.error("Please select District");

      return;
    }
    if (address === "") {
      toast.error("Please enter Address");
      return;
    }
    if (certificate === "") {
      toast.error("Please upload Certificate");
      return;
    }
    if (logo === "") {
      toast.error("Please upload Logo");
      return;
    }

    let data={
      name: name,
      phone: phoneNumber,
      gst_number: gstNumber,
      email: email,
      category: category,
      district: district,
      address: address,
      description: description,
      registration_certificate: "certificate",
      company_logo: "logo",
    };
    await handleRegister(data, "company");
    handleReset();
  };

  const handleReset = () => {
    setName("");
    setPhoneNumber("");
    setGstNumber("");
    setEmail("");
    setCategory(jobCategories[0] || "Select Category");

    setDistrict(districts[0] || "Select District");
    setAddress("");
    setDescription("");
    setCertificate("");
    setLogo("");
    document.getElementById("registrationCertificate").value = "";
    document.getElementById("logo").value = "";
  };

  return (
    <>
      <CustomTitle title="Company Registration" />
      <div className={styles.registration__container}>
        <div className={styles.registration__heading}>COMPANY REGISTRATION</div>
        <div className={styles.registration__form}>
          <div className={styles.registration__form__section}>
            <div className={styles.registration__form__section__heading}>
              Company Details
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
                  GST Number*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="text"
                    value={gstNumber}
                    onChange={(e) => setGstNumber(e.target.value)}
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
              Additional Details
            </div>
            <div className={styles.registration__form__section__fields}>
              <div className={styles.registration__form__section__field__left}>
                <div className={styles.registration__form__section__field}>
                  <div
                    className={styles.registration__form__section__field__label}
                  >
                    Category*
                  </div>
                  <div
                    className={styles.registration__form__section__field__input}
                  >
                    <select
                      name="category"
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {jobCategories.map((category) => (
                        <option value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
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
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Description
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <textarea
                    name="bio"
                    id="bio"
                    cols="30"
                    rows="7"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Address*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <textarea
                    name="address"
                    id="bio"
                    cols="30"
                    rows="7"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                  Company Logo*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="file"
                    id="logo"
                    onChange={(e) => {
                      setLogo(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Registration Certificate*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="file"
                    id="registrationCertificate"
                    onChange={(e) => {
                      setCertificate(e.target.files[0]);
                    }}
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

export default CompanyRegistration;
