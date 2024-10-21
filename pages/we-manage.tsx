import type { NextPage } from "next";
import FrameComponent6 from "../components/frame-component6";
import ContentRowTwo from "../components/content-row-two";
import SocialMediaIcons from "../components/social-media-icons";
import FrameComponent7 from "../components/frame-component7";
import ContactContent from "../components/contact-content";
import styles from "./we-manage.module.css";

const WeManage: NextPage = () => {
  return (
    <div className={styles.weManage}>
      <section className={styles.weManageChild} />
      <img className={styles.weManageItem} alt="" src="/rectangle-452@2x.png" />
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
            <img className={styles.iconClose} alt="" src="/icon--close.svg" />
            <div className={styles.errorMessage1}>Error message</div>
          </div>
          <div className={styles.successMessage}>
            <img className={styles.iconClose} alt="" src="/icon--check.svg" />
            <div className={styles.errorMessage1}>Success message</div>
          </div>
        </div>
        <div className={styles.counter}>200</div>
      </div>
      <FrameComponent6 />
      <section className={styles.weManageYourVillasWrapper}>
        <h1 className={styles.weManageYourContainer}>
          <p className={styles.yourVillas}>WE MANAGE</p>
          <p className={styles.yourVillas}>YOUR VILLAS</p>
        </h1>
      </section>
      <div className={styles.realEstate}>
        <div className={styles.title}>
          <div className={styles.kennedysRealEstate}>
            Kennedy's Real Estate Management
          </div>
          <div className={styles.expertlyManagingYour}>
            Expertly Managing Your Villas for Premium Rentals
          </div>
        </div>
        <div className={styles.villas}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-513@2x.png"
            />
            <div className={styles.topParent}>
              <div className={styles.top}>
                <div className={styles.title1}>
                  <input
                    className={styles.vuesaxlinearlocation}
                    type="checkbox"
                  />
                  <div className={styles.meganisi}>MEGANISI</div>
                </div>
                <div className={styles.number}>
                  <img
                    className={styles.numberChild}
                    alt=""
                    src="/vector-61.svg"
                  />
                  <div className={styles.div}>321</div>
                </div>
              </div>
              <div className={styles.luxuryVillas}>Luxury Villas</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-51-12@2x.png"
            />
            <div className={styles.topParent}>
              <div className={styles.top}>
                <div className={styles.title1}>
                  <input
                    className={styles.vuesaxlinearlocation}
                    type="checkbox"
                  />
                  <div className={styles.meganisi}>MYKONOS</div>
                </div>
                <div className={styles.number1}>
                  <img
                    className={styles.numberItem}
                    alt=""
                    src="/vector-6-11.svg"
                  />
                  <div className={styles.div}>210</div>
                </div>
              </div>
              <div className={styles.luxuryVillas}>Luxury Villas</div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.contentRowOneWrapper}>
        <div className={styles.contentRowOne}>
          <ContentRowTwo />
          <SocialMediaIcons />
        </div>
      </section>
      <FrameComponent7 />
      <section className={styles.contactContentParent}>
        <ContactContent />
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image-113@2x.png"
        />
      </section>
    </div>
  );
};

export default WeManage;
