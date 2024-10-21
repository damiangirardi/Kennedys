import type { NextPage } from "next";
import Navigation1 from "../components/navigation1";
import styles from "./kennedys-concierge-list.module.css";

const KennedysConciergeList: NextPage = () => {
  return (
    <div className={styles.kennedysConciergeList}>
      <Navigation1 />
      <div className={styles.dropdownMenu}>
        <div className={styles.menuItems}>
          <div className={styles.dropdownListItem}>
            <div className={styles.text}>Gluten free</div>
          </div>
          <div className={styles.dropdownListItem1}>
            <div className={styles.text}>Local</div>
          </div>
          <div className={styles.dropdownListItem}>
            <div className={styles.text}>Vegan</div>
          </div>
          <div className={styles.dropdownListItem}>
            <div className={styles.text}>Chicken</div>
          </div>
          <div className={styles.dropdownListItem}>
            <div className={styles.text}>Milk</div>
          </div>
          <div className={styles.dropdownListItem}>
            <div className={styles.text}>Sugar Free</div>
          </div>
          <div className={styles.dropdownListItem}>
            <div className={styles.text}>Barbacue</div>
          </div>
          <div className={styles.dropdownListItem}>
            <div className={styles.text}>Vegetarian</div>
          </div>
        </div>
      </div>
      <div className={styles.textForDescription}>Text for description</div>
      <div className={styles.helperText}>
        <div className={styles.explanatoryText}>
          <div className={styles.text8}>Small Explanatory text</div>
          <div className={styles.errorMessage}>
            <img className={styles.iconClose} alt="" />
            <div className={styles.errorMessage1}>Error message</div>
          </div>
          <div className={styles.successMessage}>
            <img className={styles.iconClose} alt="" />
            <div className={styles.errorMessage1}>Success message</div>
          </div>
        </div>
        <div className={styles.counter}>200</div>
      </div>
    </div>
  );
};

export default KennedysConciergeList;
