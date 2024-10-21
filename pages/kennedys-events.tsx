import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Contact from "../components/contact";
import PortalPopup from "../components/portal-popup";
import FrameComponent17 from "../components/frame-component17";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import FrameComponent16 from "../components/frame-component16";
import FrameComponent18 from "../components/frame-component18";
import FrameComponent19 from "../components/frame-component19";
import NavFinal from "../components/nav-final";
import NewsItem from "../components/news-item";
import NewsDetails from "../components/news-details";
import Blue from "../components/blue";
import Partners from "../components/partners";
import VuesaxlinearmessagesIcon from "../components/vuesaxlinearmessages-icon";
import FieldLabelContainer from "../components/field-label-container";
import FieldTypes from "../components/field-types";
import BedroomsAndBudget from "../components/bedrooms-and-budget";
import { useRouter } from "next/router";
import Vuesaxlinearcandle2Icon from "../components/vuesaxlinearcandle2-icon";
import styles from "./kennedys-events.module.css";

const KennedysEvents: NextPage = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const router = useRouter();

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  const onButtonsContainerClick = useCallback(() => {
    router.push("/kennedys-villa-detail1");
  }, [router]);

  return (
    <>
      <div className={styles.kennedysEvents}>
        <FrameComponent17 />
        <img className={styles.contentIcon} alt="" />
        <div className={styles.kennedysEventsChild} />
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
        <section className={styles.events}>EVENTS</section>
        <div className={styles.socialIcons}>
          <img className={styles.socialIconsChild} alt="" />
          <div className={styles.iconBrandFacebookColorParent}>
            <img
              className={styles.iconBrandFacebookColor}
              loading="lazy"
              alt=""
            />
            <img
              className={styles.iconBrandFacebookColor}
              loading="lazy"
              alt=""
            />
            <img className={styles.iconLinkedin} loading="lazy" alt="" />
            <img
              className={styles.iconBrandFacebookColor}
              loading="lazy"
              alt=""
            />
          </div>
          <VuesaxlinearheartIcon
            vuesaxlinearheart="pending_277:3695"
            propPosition="absolute"
            propTop="293px"
            propLeft="2.3px"
          />
        </div>
        <button className={styles.buttons} onClick={openContact}>
          <div className={styles.label}>Contact Our Event Planner</div>
          <img className={styles.vectorIcon} alt="" />
        </button>
        <h3 className={styles.letsFaceItContainer}>
          <p className={styles.letsFaceIt}>
            Let's face it, we've all been to events that were a bit of a
            letdown. But here's the big secret:
          </p>
          <p className={styles.letsFaceIt}>
            a memorable event isn't just about the budget. Whether it's personal
            or corporate, it's about creating something truly special and
            unforgettable.
          </p>
        </h3>
        <FrameComponent16 />
        <img className={styles.kennedysEventsItem} loading="lazy" alt="" />
        <FrameComponent18 />
        <section className={styles.unforgettableExperiencesThaWrapper}>
          <h1 className={styles.unforgettableExperiencesThaContainer}>
            <p className={styles.letsFaceIt}>{`unforgettable experiences `}</p>
            <p className={styles.letsFaceIt}>
              that reflect your unique vision.
            </p>
          </h1>
        </section>
        <div className={styles.unforgettableEventsTitle}>
          <h1 className={styles.unforgettableEvents}>Unforgettable Events</h1>
        </div>
        <FrameComponent19 />
        <NavFinal
          showImage={false}
          propLeft="0px"
          vuesaxlinearsms="pending_I463:192505;1215:7144"
          propWidth="118px"
          propWidth1="74px"
          capa1="pending_I463:192505;1215:7156"
          image="pending_I463:192505;1215:7177"
          iconPhone="pending_I463:192505;1215:7141"
          navvuesaxlinearProperty39="pending_I463:192505;1215:7178"
          navvuesaxlinearProperty38="pending_I463:192505;1215:7179"
        />
        <section className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.myblossom}>
              <div className={styles.myblossomChild} />
              <img className={styles.myblossomItem} alt="" />
              <div className={styles.travelDesignByMyBlossomParent}>
                <div className={styles.travelDesignByMyContainer}>
                  <p className={styles.letsFaceIt}>Travel design</p>
                  <p className={styles.by}>{`BY     my blossom `}</p>
                </div>
                <div className={styles.fromItineraryPlanning}>
                  From itinerary planning to accommodations and beyond, trust us
                  to handle all the intricacies of your journey seamlessly.
                </div>
                <div className={styles.buttons1}>
                  <div className={styles.label1}>Start Your Journey</div>
                  <img className={styles.vectorIcon} alt="" />
                </div>
              </div>
              <img className={styles.myblossomInner} alt="" />
              <img className={styles.capa1Icon} alt="" />
              <img className={styles.rectangleIcon} alt="" />
            </div>
            <div className={styles.news}>
              <h1 className={styles.weAreOn}>We are on the news</h1>
              <div className={styles.newsContent}>
                <NewsItem
                  newsBackground="pending_I463:193160;1215:7519"
                  newsIconPair="pending_I463:193160;1215:7525"
                />
                <NewsItem
                  newsBackground="pending_I463:193160;1215:7528"
                  newsIconPair="pending_I463:193160;1215:7534"
                />
                <NewsDetails
                  newsDetailBackground="pending_I463:193160;1215:7538"
                  newsDetailIcon="pending_I463:193160;1215:7544"
                />
              </div>
            </div>
            <div className={styles.blue}>
              <div className={styles.col}>
                <div className={styles.popularLocations}>Popular Locations</div>
                <div className={styles.optionsContent}>
                  <div className={styles.mykonosBodrumIbizaContainer}>
                    <p className={styles.letsFaceIt}>{`Mykonos `}</p>
                    <p className={styles.letsFaceIt}>{`Bodrum `}</p>
                    <p className={styles.letsFaceIt}>{`Ibiza `}</p>
                    <p className={styles.letsFaceIt}>{`Antiparos `}</p>
                  </div>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.letsFaceIt}>{`Athens Riviera `}</p>
                    <p className={styles.letsFaceIt}>{`Crete `}</p>
                    <p className={styles.letsFaceIt}>{`Greek Islands `}</p>
                    <p className={styles.letsFaceIt}>{`Meganisi `}</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor}>
                  Luxury Villas for Rent
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.letsFaceIt}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.letsFaceIt}>Ibiza Villas</p>
                    <p className={styles.letsFaceIt}>Tulum Villas</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.popularServices}>Popular Services</div>
                <div className={styles.chauffeurCarRentalYachtsPrParent}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.letsFaceIt}>Chauffeur</p>
                    <p className={styles.letsFaceIt}>Car Rental</p>
                    <p className={styles.letsFaceIt}>Yachts</p>
                    <p className={styles.letsFaceIt}>Private Chef</p>
                  </div>
                  <div className={styles.privateSecurityKidsContainer}>
                    <p className={styles.letsFaceIt}>Private Security</p>
                    <p className={styles.letsFaceIt}>Kids Entertainment</p>
                    <p className={styles.letsFaceIt}>Helicopter Flights</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor1}>
                  Luxury Villas for Sale
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.letsFaceIt}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.letsFaceIt}>Ibiza Villas</p>
                    <p className={styles.letsFaceIt}>Tulum Villas</p>
                  </div>
                </div>
              </div>
            </div>
            <Blue
              vector="pending_I463:193160;1215:7588"
              logo="pending_I463:193160;1215:7589"
              iconBrandFacebookColor="pending_I463:193160;1215:7606"
              iconSocialInstagram="pending_I463:193160;1215:7607"
              iconLinkedin="pending_I463:193160;1215:7608"
              iconSocialTiktok="pending_I463:193160;1215:7609"
            />
            <Partners
              image10="pending_I463:193160;1215:7613"
              image11="pending_I463:193160;1215:7614"
              image12="pending_I463:193160;1215:7615"
              image13="pending_I463:193160;1215:7616"
              image14="pending_I463:193160;1215:7617"
              image15="pending_I463:193160;1215:7618"
              image16="pending_I463:193160;1215:7619"
            />
            <div className={styles.bottom}>
              <div className={styles.kennedysGroupVacation}>
                © 2024 Kennedys Group Vacation Rentals - Terms - Privacy
              </div>
            </div>
            <div className={styles.whatsap}>
              <VuesaxlinearmessagesIcon vuesaxlinearmessages="pending_I463:193160;1215:7623" />
            </div>
          </div>
        </section>
        <section className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.eventForm}>
              <FieldLabelContainer
                propMinWidth="255px"
                ibiza="Mykonos"
                propDisplay="inline-block"
                propMinWidth1="63px"
                iconChevron="pending_755:6004"
                propWidth="24px"
                propHeight="24px"
              />
              <FieldTypes
                typeOfService="Event Type"
                iconChevron="pending_755:6011"
                propWidth="24px"
                propHeight="24px"
              />
              <BedroomsAndBudget
                propWidth="187px"
                budget="Price Range"
                propHeight="14px"
                propGap="-25px"
                trailingIcon="pending_755:6018"
              />
            </div>
            <div className={styles.buttons2} onClick={onButtonsContainerClick}>
              <div className={styles.label2}> Filters</div>
              <Vuesaxlinearcandle2Icon vuesaxlinearcandle2="pending_755:6021" />
            </div>
            <button className={styles.buttons3}>
              <a className={styles.label3}>Show 21 Services</a>
              <img className={styles.vectorIcon} alt="" />
            </button>
          </div>
        </section>
      </div>
      {isContactOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeContact}
        >
          <Contact onClose={closeContact} />
        </PortalPopup>
      )}
    </>
  );
};

export default KennedysEvents;
