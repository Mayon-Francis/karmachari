import React from "react";
import CustomTitle from "@/utils/customTitle";
import Lottie from "lottie-react";
import styles from "@/styles/student/Login.module.css";
import userlanding from "../../assets/animations/schoolcommLanding.json";
import LoginCard from "@/components/LoginCard/LoginCard";

function SchoolLogin() {
  return (
    <>
      <CustomTitle title="School Login" />
      <div className={styles.login_container}>
        <div className={styles.login_container__left}>
          <Lottie style={{width:"40vw"}}  animationData={userlanding} loop={true} />
        </div>
        <div className={styles.login_container__right}>
        <div className={styles.login_container_right_heading}>
            School Login
          </div>
          <LoginCard />
        </div>
      </div>
    </>
  );
}

export default SchoolLogin;
