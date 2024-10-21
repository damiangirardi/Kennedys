import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Contact from "../components/contact";
import PortalPopup from "../components/portal-popup";
import Loginsignup from "../components/loginsignup";
import IconBrandFacebookColor1 from "../components/icon-brand-facebook-color1";
import IconSocialInstagram from "../components/icon-social-instagram";
import IconLinkedin from "../components/icon-linkedin";
import IconSocialTiktok from "../components/icon-social-tiktok";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import FrameComponent1 from "../components/frame-component1";
import IconPhone from "../components/icon-phone";
import { useRouter } from "next/router";
import NavvuesaxlinearProperty38Icon from "../components/navvuesaxlinear-property38-icon";
import NavvuesaxlinearProperty37Icon from "../components/navvuesaxlinear-property37-icon";
import FieldLabelContainer from "../components/field-label-container";
import FieldTypes from "../components/field-types";
import BedroomsAndBudget from "../components/bedrooms-and-budget";
import Vuesaxlinearcandle2Icon from "../components/vuesaxlinearcandle2-icon";
import EventInfo from "../components/event-info";
import NewsItem from "../components/news-item";
import NewsDetails from "../components/news-details";
import Blue from "../components/blue";
import Partners from "../components/partners";
import VuesaxlinearmessagesIcon from "../components/vuesaxlinearmessages-icon";
import FloatingContainer from "../components/floating-container";
import styles from "./kennedys-events-detail.module.css";

const KennedysEventsDetail: NextPage = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isLoginsignupOpen, setLoginsignupOpen] = useState(false);
  const router = useRouter();

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  const openLoginsignup = useCallback(() => {
    setLoginsignupOpen(true);
  }, []);

  const closeLoginsignup = useCallback(() => {
    setLoginsignupOpen(false);
  }, []);

  const onVacationRentalsTextClick = useCallback(() => {
    router.push("/kennedys-villas");
  }, [router]);

  const onConciergeTextClick = useCallback(() => {
    router.push("/kennedys-concierge");
  }, [router]);

  const onEventsTextClick = useCallback(() => {
    router.push("/kennedys-events");
  }, [router]);

  const onRealEstateTextClick = useCallback(() => {
    router.push("/real-estate");
  }, [router]);

  const onWeManageYourClick = useCallback(() => {
    router.push("/we-manage");
  }, [router]);

  const onButtonsContainerClick = useCallback(() => {
    router.push("/kennedys-villa-detail1");
  }, [router]);

  return (
    <>
      <div className={styles.kennedysEventsDetail}>
        <img className={styles.imageIcon} alt="" />
        <section className={styles.kennedysEventsDetailChild} />
        <div className={styles.kennedysEventsDetailItem} />
        <img className={styles.imageIcon1} loading="lazy" alt="" />
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
        <section className={styles.weddings}>weddings</section>
        <div className={styles.socialIcons}>
          <img className={styles.socialIconsChild} alt="" />
          <div className={styles.socialMediaIcons}>
            <IconBrandFacebookColor1 iconBrandFacebookColor="pending_277:4487" />
            <IconSocialInstagram iconSocialInstagram="pending_277:4488" />
            <IconLinkedin iconLinkedin="pending_277:4489" />
            <IconSocialTiktok iconSocialTiktok="pending_277:4490" />
          </div>
          <VuesaxlinearheartIcon
            vuesaxlinearheart="pending_277:4491"
            propPosition="absolute"
            propTop="293px"
            propLeft="2.3px"
          />
        </div>
        <div className={styles.bohoWedding}>
          <div className={styles.aBohoChic}>
            A boho chic fairytale wedding on the island of Mykonos made us all
            believe again in the power of love. Two of our most beloved guests
            asked us to organise a spiritu-al wedding with a strong boho
            ambiance and a clearly chic touch on a stunning seafront location,
            as well as a lively beach party to celebrate their love and
            commit-ment to each other. And it all became true!
          </div>
        </div>
        <div className={styles.kennedysEventsDetailInner} />
        <h1 className={styles.theConcept}>The Concept</h1>
        <img className={styles.storyIcon} alt="" />
        <section className={styles.imageParent}>
          <img className={styles.imageIcon2} loading="lazy" alt="" />
          <div className={styles.dinnerImage}>
            <div className={styles.aBohoChic}>
              he wedding dinner took place in a luxurious resort, where the
              happy couple’s guests from all over the world enjoyed the
              creations of the talented chefs, while delicious BBQ treats were
              served all day long at the stunning beach of Scorpios the next
              day, where the spiritual ceremony took place, followed by a most
              mouthwatering dinner and a lively beach party.
            </div>
          </div>
          <div className={styles.frameChild} />
          <h1 className={styles.theFood}>THE FOOD</h1>
          <img className={styles.detailsIcon} loading="lazy" alt="" />
        </section>
        <section className={styles.imageGroup}>
          <img className={styles.imageIcon2} loading="lazy" alt="" />
          <div className={styles.camilleAndFranksWeddingHaWrapper}>
            <div className={styles.aBohoChic}>
              Camille and Frank’s wedding had it all in the most au-thentic of
              manners, as Shamans came from Latin America to offer their
              blessing and body painting art-ists presented guests with the
              chance to become one with the spiritual tribes. A magical 2-day
              celebration for a most inspiring happily ever after to come!
            </div>
          </div>
          <div className={styles.frameChild} />
          <h1 className={styles.theExperience}>THE Experience</h1>
          <img className={styles.detailsIcon} loading="lazy" alt="" />
        </section>
        <FrameComponent1
          theDecoration="The Decoration"
          vector17="pending_277:4501"
          thePureEnergyOfLoveAndSpiritu="The pure energy of love and spiritual connection had to be reﬂected in the setting and the magical ambiance, but our professional decorators knew exactly what to do. White and soothing colour tones, extent use of nat-ural materials, and an abundance of fresh ﬂowers, hay and straw came together to create a most mesmeris-ing feeling with a bohemian ﬂair. "
          image="pending_277:4433"
        />
        <FrameComponent1
          propTop="2114px"
          theDecoration="The MUSIC"
          vector17="pending_755:6094"
          thePureEnergyOfLoveAndSpiritu="The music choices are of great importance when a spiritual ceremony takes place, and so musicians ﬂew all the way from Mexico to perform for this very special day. After the ceremony, DJ Valeron joined the party, and the night was set on ﬁre, where guests danced until morning hours on the still warm golden sand of Scorpios beach."
          image="pending_755:6097"
        />
        <div className={styles.sello}>
          <div className={styles.selloChild} />
          <img className={styles.selloItem} loading="lazy" alt="" />
        </div>
        <button className={styles.buttons} onClick={openContact}>
          <div className={styles.label}>Contact Our Event Planner</div>
          <img className={styles.vectorIcon} alt="" />
        </button>
        <header className={styles.navFinal}>
          <div className={styles.topMenu}>
            <div className={styles.button}>
              <IconPhone iconPhone="pending_I463:192546;1215:7141" />
              <a className={styles.a} href="tel:+302108947139" target="_blank">
                +30 21089 47139
              </a>
            </div>
            <div className={styles.button1}>
              <img className={styles.vuesaxlinearsmsIcon} alt="" />
              <div className={styles.contact}>Contact</div>
            </div>
          </div>
          <div className={styles.topNav}>
            <nav className={styles.services}>
              <div
                className={styles.vacationRentals}
                onClick={onVacationRentalsTextClick}
              >
                Vacation Rentals
              </div>
              <div className={styles.concierge} onClick={onConciergeTextClick}>
                Concierge
              </div>
              <div className={styles.events} onClick={onEventsTextClick}>
                Events
              </div>
              <div
                className={styles.realEstate}
                onClick={onRealEstateTextClick}
              >
                Real Estate
              </div>
            </nav>
            <img className={styles.capa1Icon} loading="lazy" alt="" />
            <div className={styles.right}>
              <div
                className={styles.weManageYour}
                onClick={onWeManageYourClick}
              >
                We Manage Your Villas
              </div>
              <button className={styles.logIn} onClick={openLoginsignup}>
                <div className={styles.logIn1}>Log In</div>
              </button>
              <div className={styles.image}>
                <img className={styles.imageIcon4} alt="" />
                <NavvuesaxlinearProperty38Icon navvuesaxlinearProperty39="pending_I463:192546;1215:7178" />
              </div>
              <NavvuesaxlinearProperty37Icon navvuesaxlinearProperty38="pending_I463:192546;1215:7179" />
            </div>
          </div>
        </header>
        <section className={styles.eventTypes}>
          <div className={styles.eventTypeSelection}>
            <div className={styles.locationInput}>
              <FieldLabelContainer
                propMinWidth="255px"
                ibiza="Mykonos"
                propDisplay="inline-block"
                propMinWidth1="63px"
                iconChevron="pending_755:6050"
                propWidth="24px"
                propHeight="24px"
              />
              <FieldTypes
                typeOfService="Event Type"
                iconChevron="pending_755:6057"
                propWidth="24px"
                propHeight="24px"
              />
              <BedroomsAndBudget
                propWidth="187px"
                budget="Price Range"
                propHeight="14px"
                propGap="-25px"
                trailingIcon="pending_755:6064"
              />
            </div>
            <div className={styles.buttons1} onClick={onButtonsContainerClick}>
              <div className={styles.label1}> Filters</div>
              <Vuesaxlinearcandle2Icon vuesaxlinearcandle2="pending_755:6067" />
            </div>
            <button className={styles.buttons2}>
              <a className={styles.label2}>Show 21 Services</a>
              <img className={styles.vectorIcon} alt="" />
            </button>
          </div>
        </section>
        <EventInfo />
        <section className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.myblossom}>
              <div className={styles.myblossomChild} />
              <img className={styles.myblossomItem} alt="" />
              <div className={styles.travelDesignByMyBlossomParent}>
                <div className={styles.travelDesignByMyContainer}>
                  <p className={styles.travelDesign}>Travel design</p>
                  <p className={styles.by}>{`BY     my blossom `}</p>
                </div>
                <div className={styles.fromItineraryPlanning}>
                  From itinerary planning to accommodations and beyond, trust us
                  to handle all the intricacies of your journey seamlessly.
                </div>
                <div className={styles.buttons3}>
                  <div className={styles.label3}>Start Your Journey</div>
                  <img className={styles.vectorIcon} alt="" />
                </div>
              </div>
              <img className={styles.myblossomInner} alt="" />
              <img className={styles.capa1Icon1} alt="" />
              <img className={styles.rectangleIcon} alt="" />
            </div>
            <div className={styles.news}>
              <h1 className={styles.weAreOn}>We are on the news</h1>
              <div className={styles.newsItemsParent}>
                <NewsItem
                  newsBackground="pending_I463:193017;1215:7519"
                  newsIconPair="pending_I463:193017;1215:7525"
                />
                <NewsItem
                  newsBackground="pending_I463:193017;1215:7528"
                  newsIconPair="pending_I463:193017;1215:7534"
                />
                <NewsDetails
                  newsDetailBackground="pending_I463:193017;1215:7538"
                  newsDetailIcon="pending_I463:193017;1215:7544"
                />
              </div>
            </div>
            <div className={styles.blue}>
              <div className={styles.col}>
                <div className={styles.popularLocations}>Popular Locations</div>
                <div className={styles.locationContainer}>
                  <div className={styles.mykonosBodrumIbizaContainer}>
                    <p className={styles.travelDesign}>{`Mykonos `}</p>
                    <p className={styles.travelDesign}>{`Bodrum `}</p>
                    <p className={styles.travelDesign}>{`Ibiza `}</p>
                    <p className={styles.travelDesign}>{`Antiparos `}</p>
                  </div>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.travelDesign}>{`Athens Riviera `}</p>
                    <p className={styles.travelDesign}>{`Crete `}</p>
                    <p className={styles.travelDesign}>{`Greek Islands `}</p>
                    <p className={styles.travelDesign}>{`Meganisi `}</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor}>
                  Luxury Villas for Rent
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.travelDesign}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.travelDesign}>Ibiza Villas</p>
                    <p className={styles.travelDesign}>Tulum Villas</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.popularServices}>Popular Services</div>
                <div className={styles.chauffeurCarRentalYachtsPrParent}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.travelDesign}>Chauffeur</p>
                    <p className={styles.travelDesign}>Car Rental</p>
                    <p className={styles.travelDesign}>Yachts</p>
                    <p className={styles.travelDesign}>Private Chef</p>
                  </div>
                  <div className={styles.privateSecurityKidsContainer}>
                    <p className={styles.travelDesign}>Private Security</p>
                    <p className={styles.travelDesign}>Kids Entertainment</p>
                    <p className={styles.travelDesign}>Helicopter Flights</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor1}>
                  Luxury Villas for Sale
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.travelDesign}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.travelDesign}>Ibiza Villas</p>
                    <p className={styles.travelDesign}>Tulum Villas</p>
                  </div>
                </div>
              </div>
            </div>
            <Blue
              vector="pending_I463:193017;1215:7588"
              logo="pending_I463:193017;1215:7589"
              iconBrandFacebookColor="pending_I463:193017;1215:7606"
              iconSocialInstagram="pending_I463:193017;1215:7607"
              iconLinkedin="pending_I463:193017;1215:7608"
              iconSocialTiktok="pending_I463:193017;1215:7609"
            />
            <Partners
              image10="pending_I463:193017;1215:7613"
              image11="pending_I463:193017;1215:7614"
              image12="pending_I463:193017;1215:7615"
              image13="pending_I463:193017;1215:7616"
              image14="pending_I463:193017;1215:7617"
              image15="pending_I463:193017;1215:7618"
              image16="pending_I463:193017;1215:7619"
            />
            <div className={styles.bottom}>
              <div className={styles.kennedysGroupVacation}>
                © 2024 Kennedys Group Vacation Rentals - Terms - Privacy
              </div>
            </div>
            <div className={styles.whatsap}>
              <VuesaxlinearmessagesIcon vuesaxlinearmessages="pending_I463:193017;1215:7623" />
            </div>
          </div>
        </section>
        <FloatingContainer />
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
      {isLoginsignupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginsignup}
        >
          <Loginsignup onClose={closeLoginsignup} />
        </PortalPopup>
      )}
    </>
  );
};

export default KennedysEventsDetail;
