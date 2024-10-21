import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Contact from "../components/contact";
import PortalPopup from "../components/portal-popup";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import TeamInfo from "../components/team-info";
import VuesaxlinearmessagesIcon from "../components/vuesaxlinearmessages-icon";
import Footer1 from "../components/footer1";
import Nav from "../components/nav";
import TeamInfo2 from "../components/team-info2";
import PropertyCards from "../components/property-cards";
import FrameComponent8 from "../components/frame-component8";
import styles from "./real-estate.module.css";

const RealEstate: NextPage = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  return (
    <>
      <div className={styles.realEstate}>
        <section className={styles.teamInfo} />
        <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
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
        <div className={styles.realEstateInner}>
          <div className={styles.realEstateWrapper}>
            <h1 className={styles.realEstate1}>Real Estate</h1>
          </div>
        </div>
        <h1 className={styles.meetOurTeam}>MEET OUR TEAM</h1>
        <h1 className={styles.meetOurTeam1}>MEET OUR TEAM</h1>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/vector-11.svg" />
          <div className={styles.socialIcons}>
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
          <VuesaxlinearheartIcon
            vuesaxlinearheart="/vuesaxlinearheart-2.svg"
            propPosition="absolute"
            propTop="293px"
            propLeft="2.3px"
          />
        </div>
        <section className={styles.investmentParagraph} />
        <section className={styles.teamInfo1}>
          <h1 className={styles.unlockingDoorsToContainer}>
            <p className={styles.unlockingDoors}>UNLOCKING DOORS</p>
            <p className={styles.unlockingDoors}>TO YOUR DREAMS</p>
          </h1>
          <div className={styles.kennedysGroupBrings}>
            Kennedy's Group brings a unique blend of real estate expertise and
            hospitality finesse to the forefront of the industry. With a deep
            understanding of both worlds, we seamlessly integrate the principles
            of hospitality into every aspect of our real estate ventures.
          </div>
        </section>
        <section className={styles.teamInfo1}>
          <h1 className={styles.unlockingDoorsToContainer}>
            <p className={styles.unlockingDoors}>UNLOCKING DOORS</p>
            <p className={styles.unlockingDoors}>TO YOUR DREAMS</p>
          </h1>
          <div className={styles.kennedysGroupBrings}>
            Kennedy's Group brings a unique blend of real estate expertise and
            hospitality finesse to the forefront of the industry. With a deep
            understanding of both worlds, we seamlessly integrate the principles
            of hospitality into every aspect of our real estate ventures.
          </div>
        </section>
        <div className={styles.topLevelCommercial}>
          Top level commercial and residential real estate services
        </div>
        <div className={styles.topQualityHospitality}>
          Top quality hospitality and brand consultancy services
        </div>
        <div className={styles.safeAndProsperous}>
          Safe and prosperous investment opportunities
        </div>
        <section className={styles.teamInfo3} />
        <section className={styles.teamInfo4}>
          <img
            className={styles.imageIcon1}
            loading="lazy"
            alt=""
            src="/image-15@2x.png"
          />
          <div className={styles.topNetworkingParent}>
            <h1 className={styles.topNetworking}>Top Networking</h1>
            <div className={styles.ourVastExperience}>
              Our vast experience and strong personal relationships throughout
              the Mykonos market allows us access to top properties, as well as
              properties that have not yet gone on the market.
            </div>
          </div>
        </section>
        <section className={styles.teamInfo5}>
          <img
            className={styles.imageIcon2}
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
          <div className={styles.utterProfessionalismParent}>
            <h1 className={styles.topNetworking}>Utter Professionalism</h1>
            <div className={styles.ourVastExperience}>
              Our team consists of highly trained and deeply dedicated
              professionals of the real estate world, with vast experience on
              their field of expertise.
            </div>
          </div>
        </section>
        <TeamInfo
          premiumPortfolio="Premium Portfolio"
          ourPortfolioIncludesTopExclusiv="Our portfolio includes top exclusive properties, as we are the preferred agency in the high-profile Mykonos market, and we have access to almost every property on the island."
          image="/image-3@2x.png"
        />
        <TeamInfo
          propTop="2893px"
          propMinWidth="283px"
          premiumPortfolio="All in one service"
          ourPortfolioIncludesTopExclusiv="We do not stop at tracking down the ideal property for our clients; we are by their side every step of the way, taking care of all related paperwork, documentation, and legal details."
          image="/image-4@2x.png"
          propWidth="736px"
        />
        <section className={styles.footer}>
          <div className={styles.fullno}>
            <div className={styles.fullNoContainer}>
              <div className={styles.groupParent}>
                <div className={styles.officeLocationsParent}>
                  <div className={styles.officeLocations} />
                  <div className={styles.officeLocations1} />
                  <div className={styles.navigationLinks}>
                    <div className={styles.menu}>
                      <div className={styles.villas}>Villas</div>
                      <div className={styles.concierge}>Concierge</div>
                      <div className={styles.villas}>Events</div>
                      <div className={styles.realEstate2}>Real Estate</div>
                    </div>
                  </div>
                  <div className={styles.menu1}>
                    <div className={styles.aboutUs}>About Us</div>
                    <div className={styles.aboutUs}>Our story</div>
                    <div className={styles.careers}>Careers</div>
                    <div className={styles.contactUs}>Contact Us</div>
                  </div>
                  <div className={styles.dimarchouAggelouMetaxaContainer}>
                    <p className={styles.unlockingDoors}>
                      Dimarchou Aggelou Metaxa 21 Glyfada, 166 75, Athens,
                    </p>
                    <p className={styles.unlockingDoors}>
                      Greece +30 22890 28233
                    </p>
                  </div>
                  <div className={styles.athensOffice}>{`Athens Office `}</div>
                  <div className={styles.kennedysGroupVacation}>
                    © 2024 Kennedys Group Vacation Rentals - Terms - Privacy
                  </div>
                  <div className={styles.buttons}>
                    <div className={styles.label}>
                      Sign up form our newsletter
                    </div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                  <img className={styles.capa1Icon} alt="" src="/logo.svg" />
                  <div
                    className={styles.mykonosOffice}
                  >{`Mykonos Office `}</div>
                  <div className={styles.argirena84600}>
                    Argirena, 846 00, Mykonos, Greece +30 22890 28233
                  </div>
                </div>
                <div className={styles.fullWhatsapp}>
                  <VuesaxlinearmessagesIcon vuesaxlinearmessages="/vuesaxlinearmessages.svg" />
                </div>
              </div>
            </div>
          </div>
          <Footer1 />
        </section>
        <Nav
          showImage={false}
          propHeight="unset"
          propPosition="absolute"
          propTop="0px"
          propLeft="0px"
          propWidth="unset"
          propHeight1="unset"
          propHeight2="unset"
          propWidth1="unset"
          propHeight3="unset"
          propWidth2="unset"
          propDisplay="unset"
          propHeight4="unset"
          propWidth3="unset"
          propHeight5="unset"
          propHeight6="unset"
          propHeight7="unset"
          propWidth4="unset"
          propPadding="unset"
          propFlex="1"
          propHeight8="unset"
          propWidth5="118px"
          propHeight9="unset"
          propHeight10="unset"
          propHeight11="unset"
          propWidth6="85px"
          capa1="/capa-1-3.svg"
          propHeight12="unset"
          propWidth7="unset"
          propPadding1="unset"
          propFlex1="1"
          propHeight13="unset"
          propWidth8="158px"
          propHeight14="unset"
          propWidth9="unset"
          propHeight15="unset"
          iconPhone="/icon--phone2.svg"
          navvuesaxlinearProperty38="/navvuesaxlinearproperty-382.svg"
        />
        <TeamInfo2 />
        <PropertyCards />
        <FrameComponent8 />
        <button className={styles.buttons1} onClick={openContact}>
          <div className={styles.label1}>Contact Us</div>
          <img className={styles.searchIcon} alt="" src="/vector.svg" />
        </button>
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

export default RealEstate;
