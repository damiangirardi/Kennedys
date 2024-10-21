import type { NextPage } from "next";
import styles from "./label.module.css";

export type LabelType = {
  className?: string;
  mandatory?: boolean;
  info?: boolean;
  label?: string;
  optional?: boolean;
};

const Label: NextPage<LabelType> = ({
  className = "",
  mandatory = true,
  info = false,
  label = "Email",
  optional = false,
}) => {
  return (
    <div className={[styles.label, className].join(" ")}>
      <div className={styles.label1}>{label}</div>
      {optional && <div className={styles.optional}>(Optional)</div>}
      {mandatory && <b className={styles.mandatory}>*</b>}
      <div className={styles.iconInfo}>
        {info && (
          <img className={styles.iconInfo1} alt="" src="/icon--info.svg" />
        )}
      </div>
    </div>
  );
};

export default Label;
