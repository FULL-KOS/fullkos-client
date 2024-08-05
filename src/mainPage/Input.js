import React from "react";
import styles from "./MainPage.module.css";

function AuthButton(props) {
  return (
    <input
      type={props.name}
      value={props.value}
      onChange={props.onChange}
      className={`${styles.loginInput} ${styles.block} ${styles.rounded}`}
    />
  );
}

export default AuthButton;
