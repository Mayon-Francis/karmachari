import React, { useEffect } from "react";
import CustomTitle from "@/utils/customTitle";
import { districts } from "@/configs";
import styles from "@/styles/student/Registration.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { getSchools, handleLogin } from "@/utils/requests";
import { handleRegister } from "@/utils/requests";

function StudentRegistration() {
  //personal details
  const [name, setName] = React.useState("");
  const [parentName, setParentName] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [emergency, setEmergency] = React.useState("");
  const [email, setEmail] = React.useState("");

  //Academic Details
  const [schools, setSchools] = React.useState([]);
  const [school, setSchool] = React.useState("");
  const [district, setDistrict] = React.useState(
    districts[0] || "Select District"
  );
  const [bio, setBio] = React.useState("");
  const [address, setAddress] = React.useState("");

  //Upload documents
  const [idcard, setIdCard] = React.useState();
  const [resume, setResume] = React.useState("");
  const [aadhar, setAadhar] = React.useState();
  const [consent, setConsent] = React.useState("");

  const [age, setAge] = React.useState(0);

  //college list
  var list = [
    "College of Engineering, Trivandrum",
    "Model Engineering College",
    "Mar Athanasius College of Engineering",
  ];

  //function to setSchool
  useEffect(() => {
    getSchools().then((res) => {
      setSchools(res);
      setSchool(res[0]);
    });
  }, []);

  //Function to Calculate age and setAge
  function calculateAge(birthdate) {
    const today = new Date();
    const birthdateObject = new Date(birthdate);
    let age = today.getFullYear() - birthdateObject.getFullYear();
    const monthDifference = today.getMonth() - birthdateObject.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthdateObject.getDate())
    ) {
      age--;
    }

    setAge(age);
    return age;
  }

  const handleSubmit = async () => {
    if (name === "") {
      toast.error("Name is required");
      return;
    }
    if (parentName === "") {
      toast.error("Parent's Name is required");
      return;
    }
    if (dob === "") {
      toast.error("Date of Birth is required");
      return;
    }
    if (phone === "") {
      toast.error("Phone Number is required");
      return;
    }
    if (emergency === "") {
      toast.error("Emergency Contact is required");
      return;
    }
    if (email === "") {
      toast.error("Email is required");
      return;
    }
    if (school === "Select School") {
      toast.error("School is required");
      return;
    }
    if (district === "Select District") {
      toast.error("District is required");
      return;
    }
    if (address === "") {
      toast.error("Address is required");
      return;
    }
    if (photo === undefined) {
      toast.error("Photo is required");
      return;
    }
    if (aadhar === undefined) {
      toast.error("Aadhar Card is required");
      return;
    }
    if (age < 18 && consent === "") {
      toast.error("Consent is required");
      return;
    }

    console.log({
      name: name,
      parentName: parentName,
      dob: dob,
      phone: phone,
      parent_phone: emergency,
      email: email,
      school: school,
      district: district,
      bio: bio,
      address: address,
      idcard: idcard,
      resume: resume,
      aadhar: aadhar,
      consent: consent,
    });

    let data = {
      name: name,
      parent_name: parentName,
      dob: dob,
      phone: phone,
      parent_phone: emergency,
      email: email,
      school: school.name,
      district: district,
      bio: bio,
      address: address,
      id_card: "idcard",
      resume: "resume",
      aadhar_card: "aadhar",
      consent: "consent",
      school_id: school._id,
    };
    console.log(data);
    await handleRegister(data, "student");
    handleReset();
  };
  const handleReset = () => {
    setName("");
    setParentName("");
    setDob("");
    setPhone("");
    setEmergency("");
    setEmail("");
    setSchool(schools[0] || "Select School");

    setDistrict(districts[0] || "Select District");
    setBio("");
    setAddress("");
    setIdCard();
    setResume("");
    setAadhar();
    setConsent("");
    document.getElementById("idCard").value = "";
    document.getElementById("aadhar").value = "";
    document.getElementById("consent").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("studentPhoto").value = "";
  };
  return (
    <>
      <CustomTitle title="Student Registration" />
      <div className={styles.registration__container}>
        <div className={styles.registration__heading}>STUDENT REGISTRATION</div>
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
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Father's / Mother's Name*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => {
                      setParentName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Date of Birth*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                      calculateAge(e.target.value);
                    }}
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
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Emergency Contact Number*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="number"
                    value={emergency}
                    onChange={(e) => {
                      setEmergency(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.registration__form__section}>
            <div className={styles.registration__form__section__heading}>
              Academic Details & Residence
            </div>
            <div className={styles.registration__form__section__fields}>
              <div className={styles.registration__form__section__field__left}>
                <div className={styles.registration__form__section__field}>
                  <div
                    className={styles.registration__form__section__field__label}
                  >
                    School*
                  </div>
                  <div
                    className={styles.registration__form__section__field__input}
                  >
                    {/*Data has to be loaded from backend */}
                    {/* <select
                      name="school"
                      id="school"
                      value={school}
                      onChange={(e) => {
                        setSchool(e.target.value);
                      }}
                    >
                      {schools.map((school) => (
                        <option value={school}>{school}</option>
                      ))}
                    </select> */}
                    <select
                      name="school"
                      id="school"
                      value={JSON.stringify(school)}
                      onChange={(e) => {
                        console.log(JSON.parse(e.target.value));
                        setSchool(JSON.parse(e.target.value));
                      }}
                    >
                      {schools?.map((school) => (
                        <option value={JSON.stringify(school)}>
                          {school.name}
                        </option>
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
                      onChange={(e) => {
                        setDistrict(e.target.value);
                      }}
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
                  Bio
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <textarea
                    name="bio"
                    id="bio"
                    cols="30"
                    rows="7"
                    value={bio}
                    onChange={(e) => {
                      setBio(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
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
                  School ID Card
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="file"
                    id="idCard"
                    onChange={(e) => {
                      setIdCard(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Resume
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="file"
                    id="resume"
                    onChange={(e) => {
                      setResume(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Aadhar Card*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="file"
                    id="aadhar"
                    onChange={(e) => {
                      setAadhar(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              {age < 18 && (
                <div className={styles.registration__form__section__field}>
                  <div
                    className={styles.registration__form__section__field__label}
                  >
                    Parent's Consent
                  </div>
                  <div
                    className={styles.registration__form__section__field__input}
                  >
                    <input
                      type="file"
                      id="consent"
                      onChange={(e) => {
                        setConsent(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div
                    className={styles.registration__form__section__field__note}
                  >
                    **Applicable for students below 18 years of Age
                  </div>
                </div>
              )}
              <div className={styles.registration__form__section__field}>
                <div
                  className={styles.registration__form__section__field__label}
                >
                  Photo*
                </div>
                <div
                  className={styles.registration__form__section__field__input}
                >
                  <input
                    type="file"
                    id="studentPhoto"
                    onChange={(e) => {
                      setPhoto(e.target.files[0]);
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
              Register <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentRegistration;
