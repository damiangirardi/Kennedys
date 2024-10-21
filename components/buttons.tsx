import type { NextPage } from "next";
import styles from "./buttons.module.css";

export type ButtonsType = {
  className?: string;
  showLeadingIcon?: boolean;
  label?: string;
};

const Buttons: NextPage<ButtonsType> = ({
  className = "",
  showLeadingIcon = false,
  label = "Continue With Email",
}) => {
  return (
    <button className={[styles.buttons, className].join(" ")}>
      {showLeadingIcon && (
        <img className={styles.iconPlus} alt="" src="/icon--plus.svg" />
      )}
      <div className={styles.container}>
        <div className={styles.label}>{label}</div>
      </div>
    </button>
  );
};

export default Buttons;
