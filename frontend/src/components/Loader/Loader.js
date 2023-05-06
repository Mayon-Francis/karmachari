import React from "react";
import loading from "../../assets/animations/loader.json";
import Lottie from "lottie-react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader__container}>
      <div className={styles.lottie__container}>
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  );
}

export default Loader;
