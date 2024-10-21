import type { NextPage } from "next";
import { useCallback } from "react";
import VuesaxlinearheartIcon1 from "./vuesaxlinearheart-icon1";
import Vuesaxlinearhierarchy from "./vuesaxlinearhierarchy";
import { useRouter } from "next/router";
import Vuesaxlinearcandle2Icon from "./vuesaxlinearcandle2-icon";
import BookingFormLabels from "./booking-form-labels";
import FrameComponent from "./frame-component";
import styles from "./frame-component10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  const router = useRouter();

  const onButtonsContainerClick = useCallback(() => {
    router.push("/kennedys-villas-list");
  }, [router]);

  return (
    <section className={[styles.heroContentParent, className].join(" ")}>
      <div className={styles.heroContent}>
        <h1 className={styles.teresa}>Teresa</h1>
        <div className={styles.aLuxuryVillaContainer}>
          <p className={styles.aLuxuryVilla}>
            A luxury villa with homey feeling in Kranidi, Porto Heli, Greece  “A
            beautiful property
          </p>
          <p className={styles.locatedInOneOfThePrimmest}>
            <span
              className={styles.locatedInOne}
            >{`located in one of the primmest areas of Portoheli providing `}</span>
            <span className={styles.magical}>magical</span>
            <span className={styles.locatedInOne}> views, comfortable</span>
          </p>
          <p className={styles.aLuxuryVilla}>
            and spacious features to embrace your holidays with friends and
            family.” 
          </p>
        </div>
        <div className={styles.heroActions}>
          <div className={styles.vuesaxlinearheartParent}>
            <VuesaxlinearheartIcon1
              vuesaxlinearheart="/vuesaxlinearheart1.svg"
              propHeight="26px"
              propWidth="26px"
            />
            <div className={styles.save}>Save</div>
          </div>
          <div className={styles.vuesaxlinearhierarchy2Parent}>
            <Vuesaxlinearhierarchy vuesaxlinearhierarchy2="/vuesaxlinearhierarchy2.svg" />
            <div className={styles.share}>Share</div>
          </div>
        </div>
        <div className={styles.label}>Price upon request</div>
      </div>
      <form className={styles.availabilityContent}>
        <div className={styles.checkAvailabilityParent}>
          <h1 className={styles.checkAvailability}>Check Availability</h1>
          <div className={styles.buttons} onClick={onButtonsContainerClick}>
            <div className={styles.label1}> Filters</div>
            <Vuesaxlinearcandle2Icon vuesaxlinearcandle2="/vuesaxlinearcandle2.svg" />
          </div>
        </div>
        <div className={styles.bookingFormFieldsWrapper}>
          <div className={styles.bookingFormFields}>
            <BookingFormLabels
              location1="Location"
              mykonos="Mykonos"
              iconChevron="/trailing-icon14.svg"
              propWidth="27.2px"
              propHeight2="24px"
            />
            <div className={styles.bookingFormLabels}>
              <div className={styles.label2}>
                <div className={styles.villa}>Villa</div>
              </div>
              <div className={styles.fieldText}>
                <img
                  className={styles.leadingIcon}
                  alt=""
                  src="/leading-icon1.svg"
                />
                <input
                  className={styles.container}
                  placeholder="Teresa"
                  type="text"
                />
                <img
                  className={styles.leadingIcon}
                  alt=""
                  src="/trailing-icon2.svg"
                />
              </div>
            </div>
            <div className={styles.bookingFormLabels1}>
              <FrameComponent
                propFlex="1"
                propWidth="unset"
                propAlignSelf="stretch"
                checkIn="Check In"
                trailingIcon2="/trailing-icon15.svg"
                trailingIcon3={false}
                showTrailingIcon
                iconCalendar="/trailing-icon-11.svg"
                propWidth1="27.2px"
              />
              <FrameComponent
                propFlex="1"
                propWidth="unset"
                propAlignSelf="stretch"
                trailingIcon2="/trailing-icon15.svg"
                trailingIcon3={false}
                showTrailingIcon
                iconCalendar="/trailing-icon-11.svg"
                propWidth1="27.2px"
              />
            </div>
          </div>
        </div>
        <button className={styles.buttons1}>
          <div className={styles.label3}>Check Now</div>
          <img className={styles.searchIcon} alt="" src="/vector.svg" />
        </button>
      </form>
    </section>
  );
};

export default FrameComponent10;
