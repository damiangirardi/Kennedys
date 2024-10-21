import type { NextPage } from "next";
import IconChevron from "./icon-chevron";
import IconCalendar from "./icon-calendar";
import styles from "./contact.module.css";

export type ContactType = {
  className?: string;
  onClose?: () => void;
};

const Contact: NextPage<ContactType> = ({ className = "", onClose }) => {
  return (
    <div className={[styles.contact, className].join(" ")}>
      <div className={styles.xWrapper}>
        <img className={styles.xIcon} loading="lazy" alt="" />
      </div>
      <h1 className={styles.contactUs}>Contact Us</h1>
      <div className={styles.baseTextFields}>
        <div className={styles.iNeedMore}>I need more info for:</div>
        <div className={styles.tripDetails}>
          <div className={styles.dateSelection}>
            <div className={styles.jetRental}>Jet Rental</div>
            <IconChevron
              iconChevron="pending_805:5121"
              propWidth="24px"
              propHeight="24px"
            />
            <div className={styles.text}>Text</div>
            <div className={styles.typing} />
          </div>
          <img className={styles.xIcon1} alt="" />
        </div>
        <div className={styles.helper}>
          <img className={styles.xIcon2} alt="" />
          <div className={styles.helperText}>Helper text</div>
        </div>
      </div>
      <div className={styles.formFields}>
        <div className={styles.baseTextFields1}>
          <div className={styles.iNeedMore}>Location:</div>
          <div className={styles.frameParent}>
            <div className={styles.tulumParent}>
              <div className={styles.tulum}>Tulum</div>
              <IconChevron iconChevron="pending_805:5147" />
              <div className={styles.text}>Text</div>
              <div className={styles.typing} />
            </div>
            <img className={styles.xIcon1} alt="" />
          </div>
          <div className={styles.helper}>
            <img className={styles.xIcon2} alt="" />
            <div className={styles.helperText}>Helper text</div>
          </div>
        </div>
        <div className={styles.baseTextFields2}>
          <div className={styles.estimatedDate}>Estimated Date:</div>
          <div className={styles.frameGroup}>
            <div className={styles.tulumParent}>
              <input
                className={styles.placeholder}
                placeholder="09/06/2024 - 12/06/2024"
                type="text"
              />
              <IconCalendar iconCalendar="pending_805:5131" />
              <div className={styles.text2}>Text</div>
              <div className={styles.typing} />
            </div>
            <img className={styles.xIcon1} alt="" />
          </div>
          <div className={styles.helper2}>
            <img className={styles.xIcon2} alt="" />
            <div className={styles.helperText}>Helper text</div>
          </div>
        </div>
      </div>
      <div className={styles.baseTextFields3}>
        <input
          className={styles.firstAndLast}
          placeholder="First and Last Name"
          type="text"
        />
        <div className={styles.frameContainer}>
          <div className={styles.textParent}>
            <div className={styles.text2}>Text</div>
            <div className={styles.typing} />
          </div>
          <img className={styles.xIcon1} alt="" />
        </div>
        <div className={styles.helper2}>
          <img className={styles.xIcon2} alt="" />
          <div className={styles.helperText}>Helper text</div>
        </div>
      </div>
      <div className={styles.baseTextFields3}>
        <input
          className={styles.firstAndLast}
          placeholder="Email (required)"
          type="text"
        />
        <div className={styles.frameContainer}>
          <div className={styles.textParent}>
            <div className={styles.text2}>Text</div>
            <div className={styles.typing} />
          </div>
          <img className={styles.xIcon1} alt="" />
        </div>
        <div className={styles.helper2}>
          <img className={styles.xIcon2} alt="" />
          <div className={styles.helperText}>Helper text</div>
        </div>
      </div>
      <div className={styles.baseTextFields}>
        <div className={styles.iNeedMore}>Want to be contacted by Phone?</div>
        <div className={styles.frameParent1}>
          <input
            className={styles.frameChild}
            placeholder="(00) 000 000 0000"
            type="text"
          />
          <img className={styles.xIcon1} alt="" />
        </div>
        <div className={styles.helper}>
          <img className={styles.xIcon2} alt="" />
          <div className={styles.helperText}>Helper text</div>
        </div>
      </div>
      <section className={styles.textAreas}>
        <div className={styles.baseTextAreas}>
          <div className={styles.iNeedMore}>
            Is there anything else you'd like to clarify?
          </div>
          <textarea className={styles.baseTextAreasChild} rows={4} cols={26} />
          <div className={styles.helper6}>
            <div className={styles.helper7}>
              <img className={styles.xIcon2} alt="" />
              <div className={styles.helperText}>helper text</div>
            </div>
            <div className={styles.count}>
              <div className={styles.number}>0/100</div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.bookA30MinCoachingSessionParent}>
        <div className={styles.bookA30}>Cancel</div>
        <button className={styles.bookA30MinCoachingSessionWrapper}>
          <div className={styles.bookA301}>{`Send `}</div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
