import type { NextPage } from "next";
import Label from "./label";
import FieldText from "./field-text";
import styles from "./inputs.module.css";

export type InputsType = {
  className?: string;
  label?: string;
  mandatory?: boolean;
  info?: boolean;
  optional?: boolean;
  placeholder?: string;
  showChips?: boolean;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
};

const Inputs: NextPage<InputsType> = ({
  className = "",
  label,
  mandatory,
  info,
  optional,
  placeholder,
  showChips,
  showLeadingIcon,
  showTrailingIcon,
}) => {
  return (
    <div className={[styles.inputs, className].join(" ")}>
      <div className={styles.textForDescription}>Text for description</div>
      <Label
        mandatory={mandatory}
        info={info}
        label={label}
        optional={optional}
      />
      <FieldText
        showChips={showChips}
        showLeadingIcon={showLeadingIcon}
        placeholder={placeholder}
        showTrailingIcon={showTrailingIcon}
      />
      <div className={styles.helperText}>
        <div className={styles.explanatoryText}>
          <div className={styles.text}>Small Explanatory text</div>
          <div className={styles.errorMessage}>
            <img className={styles.iconClose} alt="" src="/icon--close6.svg" />
            <div className={styles.errorMessage1}>Error message</div>
          </div>
          <div className={styles.successMessage}>
            <img className={styles.iconClose} alt="" src="/icon--check7.svg" />
            <div className={styles.errorMessage1}>Success message</div>
          </div>
        </div>
        <div className={styles.counter}>200</div>
      </div>
    </div>
  );
};

export default Inputs;
