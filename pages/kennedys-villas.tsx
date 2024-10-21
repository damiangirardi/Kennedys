import type { NextPage } from "next";
import GroupComponent2 from "../components/group-component2";
import PickedVillas from "../components/picked-villas";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import SearchInput from "../components/search-input";
import Footer from "../components/footer";
import NavFinal from "../components/nav-final";
import styles from "./kennedys-villas.module.css";

const KennedysVillas: NextPage = () => {
  return (
    <div className={styles.kennedysVillas}>
      <GroupComponent2 />
      <section className={styles.kennedysVillasChild} />
      <div className={styles.kennedysVillasItem} />
      <img
        className={styles.kennedysVillasInner}
        alt=""
        src="/rectangle-451@2x.png"
      />
      <img
        className={styles.unionIcon}
        loading="lazy"
        alt=""
        src="/union.svg"
      />
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
      <section className={styles.frameSection} />
      <h3 className={styles.villasAndChalets}>Villas and Chalets</h3>
      <div className={styles.getInTouch}>
        GET IN TOUCH WITH US TODAY, TO UNLOCK OUR PRIVATE VILLA COLLECTION
      </div>
      <section className={styles.luxuryVacationRentals}>
        LUXURY VACATION RENTALS
      </section>
      <PickedVillas />
      <div className={styles.buttons}>
        <div className={styles.label}>Exclusive collection</div>
        <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      </div>
      <FrameComponent2 />
      <FrameComponent3 />
      <div className={styles.socialIcons}>
        <img className={styles.socialIconsChild} alt="" src="/vector-11.svg" />
        <div className={styles.socialMediaIcons}>
          <img
            className={styles.iconBrandFacebookColor}
            loading="lazy"
            alt=""
            src="/icon--brandfacebookcolor.svg"
          />
          <img
            className={styles.iconBrandFacebookColor}
            loading="lazy"
            alt=""
            src="/icon--socialinstagram.svg"
          />
          <img
            className={styles.iconLinkedin}
            loading="lazy"
            alt=""
            src="/icon--linkedin.svg"
          />
          <img
            className={styles.iconBrandFacebookColor}
            loading="lazy"
            alt=""
            src="/icon--socialtiktok.svg"
          />
        </div>
        <VuesaxlinearheartIcon vuesaxlinearheart="/vuesaxlinearheart-2.svg" />
      </div>
      <SearchInput />
      <Footer
        logo="/logo.svg"
        image13="/image-13@2x.png"
        image16="/image-16@2x.png"
      />
      <NavFinal
        showImage={false}
        vuesaxlinearsms="/vuesaxlinearsms2.svg"
        capa1="/capa-1-3.svg"
        image="/image-12@2x.png"
        iconPhone="/icon--phone2.svg"
        navvuesaxlinearProperty39="/navvuesaxlinearproperty-392.svg"
        navvuesaxlinearProperty38="/navvuesaxlinearproperty-382.svg"
      />
    </div>
  );
};

export default KennedysVillas;
