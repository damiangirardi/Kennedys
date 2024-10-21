import type { NextPage } from "next";
import styles from "./field-text.module.css";

export type FieldTextType = {
  className?: string;
  showChips?: boolean;
  showLeadingIcon?: boolean;
  placeholder?: string;
  showTrailingIcon?: boolean;
};

const FieldText: NextPage<FieldTextType> = ({
  className = "",
  showChips = false,
  showLeadingIcon = false,
  placeholder = "leticiapeuser@gmail.com|",
  showTrailingIcon = false,
}) => {
  return (
    <div className={[styles.fieldText, className].join(" ")}>
      {showLeadingIcon && (
        <img className={styles.leadingIcon} alt="" src="/leading-icon7.svg" />
      )}
      <div className={styles.container}>
        <div className={styles.placeholder}>{placeholder}</div>
        {showChips && (
          <div className={styles.chips}>
            <div className={styles.chips1}>
              <img
                className={styles.leadingIcon1}
                alt=""
                src="/leadingicon10.svg"
              />
              <div className={styles.label}>{`Chip `}</div>
              <div className={styles.number}>213</div>
              <img
                className={styles.trailingIcon}
                alt=""
                src="/trailingicon2.svg"
              />
            </div>
            <div className={styles.chips1}>
              <img
                className={styles.leadingIcon1}
                alt=""
                src="/leadingicon10.svg"
              />
              <div className={styles.label}>Chip</div>
              <div className={styles.number}>213</div>
              <img
                className={styles.trailingIcon1}
                alt=""
                src="/trailingicon2.svg"
              />
            </div>
            <div className={styles.div}>+2</div>
          </div>
        )}
      </div>
      {showTrailingIcon && (
        <img className={styles.leadingIcon} alt="" src="/trailing-icon16.svg" />
      )}
    </div>
  );
};

export default FieldText;
