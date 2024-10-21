import type { NextPage } from "next";
import Inputs from "./inputs";
import Buttons from "./buttons";
import IconBrandGoogleColor from "./icon-brand-google-color";
import IconApple from "./icon-apple";
import IconBrandFacebookColor from "./icon-brand-facebook-color";
import styles from "./loginsignup.module.css";

export type LoginsignupType = {
  className?: string;
  onClose?: () => void;
};

const Loginsignup: NextPage<LoginsignupType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.loginsignup, className].join(" ")}>
      <img
        className={styles.puffPastryWrappedApplesStiIcon}
        loading="lazy"
        alt=""
        src="/puff-pastry-wrapped-apples-still-l-1@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.loginSignup}>
          <img className={styles.xIcon} loading="lazy" alt="" src="/x.svg" />
        </div>
        <div className={styles.account}>
          <div className={styles.title}>
            <h1 className={styles.enterYourEmailContainer}>
              <p className={styles.enterYourEmail}>{`Enter Your Email to `}</p>
              <p className={styles.enterYourEmail}>
                Log In or Create an Account
              </p>
            </h1>
          </div>
          <div className={styles.form}>
            <div className={styles.inputFields}>
              <Inputs
                label="Email"
                mandatory
                info={false}
                optional={false}
                placeholder="leticiapeuser@gmail.com|"
                showChips={false}
                showLeadingIcon={false}
                showTrailingIcon={false}
              />
              <Buttons showLeadingIcon={false} label="Continue With Email" />
            </div>
            <div className={styles.or}>or</div>
            <div className={styles.socials}>
              <div className={styles.socials1}>
                <button className={styles.buttons}>
                  <IconBrandGoogleColor />
                  <div className={styles.container}>
                    <div className={styles.label}>Continue With Google</div>
                  </div>
                </button>
                <button className={styles.buttons}>
                  <IconApple />
                  <div className={styles.container1}>
                    <div className={styles.label1}>Continue With Apple</div>
                  </div>
                </button>
                <button className={styles.buttons}>
                  <IconBrandFacebookColor />
                  <div className={styles.container2}>
                    <div className={styles.label2}>Continue Facebook</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.bySigningUpContainer}>
            <span>{`By signing up, you agree to Kennedy’s `}</span>
            <span className={styles.terms}>Terms</span>
            <span>{` and `}</span>
            <span className={styles.terms}>Privacy Policy.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
