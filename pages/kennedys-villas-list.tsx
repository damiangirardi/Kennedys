import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Loginsignup from "../components/loginsignup";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import Tag from "../components/tag";
import Card4 from "../components/card4";
import Card2 from "../components/card2";
import VillaItem from "../components/villa-item";
import IconSocialInstagram from "../components/icon-social-instagram";
import IconLinkedin from "../components/icon-linkedin";
import IconSocialTiktok from "../components/icon-social-tiktok";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import FilterWrapper from "../components/filter-wrapper";
import IconPhone from "../components/icon-phone";
import NavvuesaxlinearProperty38Icon from "../components/navvuesaxlinear-property38-icon";
import NavvuesaxlinearProperty37Icon from "../components/navvuesaxlinear-property37-icon";
import VuesaxlinearuserIcon from "../components/vuesaxlinearuser-icon";
import VuesaxlinearheartIcon1 from "../components/vuesaxlinearheart-icon1";
import styles from "./kennedys-villas-list.module.css";

const KennedysVillasList: NextPage = () => {
  const [isLoginsignupOpen, setLoginsignupOpen] = useState(false);
  const router = useRouter();

  const openLoginsignup = useCallback(() => {
    setLoginsignupOpen(true);
  }, []);

  const closeLoginsignup = useCallback(() => {
    setLoginsignupOpen(false);
  }, []);

  const onCardContainerClick = useCallback(() => {
    router.push("/kennedys-villa-detail1");
  }, [router]);

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

  return (
    <>
      <div className={styles.kennedysVillasList} onClick={openLoginsignup}>
        <section className={styles.tagsParent}>
          <div className={styles.tags}>
            <Tag
              showNumber="(3)"
              showTrailingIcon
              showLeadingIcon={false}
              labelPlaceholder="Ibiza"
            />
            <Tag
              showNumber="(3)"
              showTrailingIcon
              showLeadingIcon={false}
              labelPlaceholder="Pool"
            />
            <Tag
              showNumber="(3)"
              showTrailingIcon
              showLeadingIcon={false}
              labelPlaceholder="Bar"
            />
          </div>
          <div className={styles.villasFound}>12 Villas Found</div>
          <div className={styles.vuesaxlineararchiveTick}>
            <img
              className={styles.vuesaxlineararchiveTickIcon}
              alt=""
              src="/vuesaxlineararchivetick.svg"
            />
          </div>
          <Card4 />
          <Card2
            rectangle39="/rectangle-39-11@2x.png"
            title="Narcisa"
            capa1="/capa-1-4@2x.png"
            propHeight="18px"
            propWidth="18px"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/rectangle-39-2@2x.png"
            propLeft="330px"
            title="Antonella"
            title1="Ibiza"
            capa1="/capa-1-4@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/image-61@2x.png"
            propLeft="330px"
            title="Carmen"
            title1="Ibiza"
            capa1="/capa-1-7@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <Card2
            rectangle39="/image-71@2x.png"
            title="Sara"
            capa1="/capa-1-7@2x.png"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/image-81@2x.png"
            propLeft="330px"
            title="Camila"
            title1="Ibiza"
            capa1="/capa-1-7@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/rectangle-39-3@2x.png"
            propLeft="330px"
            title="Casa Gody"
            title1="Ibiza"
            capa1="/capa-1-10@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/rectangle-39-4@2x.png"
            propLeft="330px"
            title="Narcisa"
            title1="Ibiza"
            capa1="/capa-1-10@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/image-91@2x.png"
            propLeft="330px"
            title="Valeria"
            title1="Ibiza"
            capa1="/capa-1-10@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/rectangle-39-5@2x.png"
            propLeft="330px"
            title="Narcisa"
            title1="Ibiza"
            capa1="/capa-1-9@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/rectangle-39-5@2x.png"
            propLeft="330px"
            title="Narcisa"
            title1="Ibiza"
            capa1="/capa-1-9@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
          <VillaItem
            propBorder="1px solid #a3a3a3"
            onCardContainerClick={onCardContainerClick}
            propFlex="unset"
            propMinWidth="unset"
            villaImage="/rectangle-39-7@2x.png"
            propLeft="330px"
            title="Mimesis"
            title1="Ibiza"
            capa1="/capa-1-9@2x.png"
            title2="From € 12,000.00 / Night"
            propDisplay="unset"
            propMinWidth1="unset"
          />
        </section>
        <footer className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.blue}>
              <div className={styles.col}>
                <div className={styles.popularLocations}>Popular Locations</div>
                <div className={styles.footerLocationContent}>
                  <div className={styles.mykonosBodrumIbizaContainer}>
                    <p className={styles.mykonos}>{`Mykonos `}</p>
                    <p className={styles.mykonos}>{`Bodrum `}</p>
                    <p className={styles.mykonos}>{`Ibiza `}</p>
                    <p className={styles.mykonos}>{`Antiparos `}</p>
                  </div>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.mykonos}>{`Athens Riviera `}</p>
                    <p className={styles.mykonos}>{`Crete `}</p>
                    <p className={styles.mykonos}>{`Greek Islands `}</p>
                    <p className={styles.mykonos}>{`Meganisi `}</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor}>
                  Luxury Villas for Rent
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.mykonos}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.mykonos}>Ibiza Villas</p>
                    <p className={styles.mykonos}>Tulum Villas</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.popularServices}>Popular Services</div>
                <div className={styles.chauffeurCarRentalYachtsPrParent}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.mykonos}>Chauffeur</p>
                    <p className={styles.mykonos}>Car Rental</p>
                    <p className={styles.mykonos}>Yachts</p>
                    <p className={styles.mykonos}>Private Chef</p>
                  </div>
                  <div className={styles.privateSecurityKidsContainer}>
                    <p className={styles.mykonos}>Private Security</p>
                    <p className={styles.mykonos}>Kids Entertainment</p>
                    <p className={styles.mykonos}>Helicopter Flights</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor1}>
                  Luxury Villas for Sale
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.mykonos}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.mykonos}>Ibiza Villas</p>
                    <p className={styles.mykonos}>Tulum Villas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blue1}>
              <div className={styles.col4}>
                <div className={styles.villas}>Villas</div>
                <div className={styles.villas}>Concierge</div>
                <div className={styles.villas}>Events</div>
                <div className={styles.villas}>Real Estate</div>
                <div className={styles.travelDesign}>Travel Design</div>
              </div>
              <div className={styles.col4}>
                <div className={styles.villas}>We Manage</div>
                <div className={styles.villas}>About Us</div>
                <div className={styles.villas}>We are on the News</div>
                <div className={styles.villas}>Contact Us</div>
                <div className={styles.villas}>Sitemap</div>
              </div>
              <div className={styles.col6}>
                <div className={styles.footerContactInfo}>
                  <div
                    className={styles.popularServices}
                  >{`Athens Office `}</div>
                  <div className={styles.dimarchouAggelouMetaxaContainer}>
                    <p className={styles.mykonos}>
                      Dimarchou Aggelou Metaxa 21 Glyfada, 166 75, Athens,
                    </p>
                    <p className={styles.mykonos}>Greece +30 22890 28233</p>
                  </div>
                </div>
                <div className={styles.footerContactInfo1}>
                  <div
                    className={styles.popularServices}
                  >{`Mykonos Office `}</div>
                  <div className={styles.argirena84600}>
                    Argirena, 846 00, Mykonos, Greece +30 22890 28233
                  </div>
                </div>
              </div>
              <div className={styles.col7}>
                <div className={styles.buttons}>
                  <div className={styles.label}>
                    Sign up form our newsletter
                  </div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-71.svg"
                  />
                </div>
                <img
                  className={styles.logoIcon}
                  loading="lazy"
                  alt=""
                  src="/logo.svg"
                />
                <div className={styles.footerSocialIcon}>
                  <img
                    className={styles.iconBrandFacebookColor}
                    loading="lazy"
                    alt=""
                    src="/icon--brandfacebookcolor-1.svg"
                  />
                  <IconSocialInstagram iconSocialInstagram="/icon--socialinstagram-1.svg" />
                  <IconLinkedin iconLinkedin="/icon--linkedin-1.svg" />
                  <IconSocialTiktok iconSocialTiktok="/icon--socialtiktok-1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.partners}>
              <div className={styles.partnerLogo}>
                <div className={styles.partners1}>Partners</div>
                <img
                  className={styles.image10Icon}
                  loading="lazy"
                  alt=""
                  src="/image-10@2x.png"
                />
                <img
                  className={styles.image11Icon}
                  loading="lazy"
                  alt=""
                  src="/image-11@2x.png"
                />
                <img
                  className={styles.image12Icon}
                  loading="lazy"
                  alt=""
                  src="/image-12@2x.png"
                />
                <img
                  className={styles.image13Icon}
                  loading="lazy"
                  alt=""
                  src="/image-13@2x.png"
                />
                <img
                  className={styles.image14Icon}
                  loading="lazy"
                  alt=""
                  src="/image-14@2x.png"
                />
                <img
                  className={styles.image15Icon}
                  loading="lazy"
                  alt=""
                  src="/image-15@2x.png"
                />
                <img
                  className={styles.image16Icon}
                  loading="lazy"
                  alt=""
                  src="/image-16@2x.png"
                />
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.kennedysGroupVacation}>
                © 2024 Kennedys Group Vacation Rentals - Terms - Privacy
              </div>
            </div>
            <div className={styles.whatsap}>
              <img
                className={styles.vuesaxlinearmessagesIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlinearmessages.svg"
              />
            </div>
          </div>
        </footer>
        <div className={styles.cardLayout} />
        <div className={styles.cardLayout1} />
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
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/vector-11.svg" />
          <div className={styles.iconBrandFacebookColorParent}>
            <img
              className={styles.iconSocialInstagram}
              loading="lazy"
              alt=""
              src="/icon--brandfacebookcolor.svg"
            />
            <img
              className={styles.iconSocialInstagram}
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
              className={styles.iconSocialInstagram}
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
        <div className={styles.breadcumbs}>
          <div className={styles.home}>Home</div>
          <div className={styles.div}>{`>`}</div>
          <div className={styles.luxuryVacationRentals}>
            Luxury Vacation rentals
          </div>
          <div className={styles.div}>{`>`}</div>
          <div className={styles.mykonos1}>Mykonos</div>
        </div>
        <FilterWrapper />
        <header className={styles.navFinal}>
          <div className={styles.topMenu}>
            <div className={styles.button}>
              <IconPhone iconPhone="/icon--phone2.svg" />
              <a className={styles.a} href="tel:+302108947139" target="_blank">
                +30 21089 47139
              </a>
            </div>
            <div className={styles.button1}>
              <img
                className={styles.vuesaxlinearsmsIcon}
                alt=""
                src="/vuesaxlinearsms2.svg"
              />
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
              <div className={styles.concierge1} onClick={onConciergeTextClick}>
                Concierge
              </div>
              <div className={styles.events1} onClick={onEventsTextClick}>
                Events
              </div>
              <div
                className={styles.realEstate1}
                onClick={onRealEstateTextClick}
              >
                Real Estate
              </div>
            </nav>
            <img
              className={styles.capa1Icon}
              loading="lazy"
              alt=""
              src="/capa-1-3.svg"
            />
            <div className={styles.right}>
              <div
                className={styles.weManageYour}
                onClick={onWeManageYourClick}
              >
                We Manage Your Villas
              </div>
              <div className={styles.logIn} onClick={openLoginsignup}>
                <div className={styles.logIn1}>Log In</div>
              </div>
              <div className={styles.image}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image-12@2x.png"
                />
                <NavvuesaxlinearProperty38Icon navvuesaxlinearProperty39="/navvuesaxlinearproperty-392.svg" />
              </div>
              <NavvuesaxlinearProperty37Icon navvuesaxlinearProperty38="/navvuesaxlinearproperty-382.svg" />
            </div>
          </div>
        </header>
        <div className={styles.submenu204}>
          <div className={styles.profileSavedOptions}>
            <VuesaxlinearuserIcon />
            <div className={styles.myProfile} onClick={onRealEstateTextClick}>
              My Profile
            </div>
          </div>
          <div className={styles.profileSavedOptions1}>
            <VuesaxlinearheartIcon1
              vuesaxlinearheart="/vuesaxlinearheart.svg"
              propHeight="18px"
              propWidth="18px"
            />
            <div className={styles.saved} onClick={onRealEstateTextClick}>
              Saved
            </div>
          </div>
        </div>
      </div>
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

export default KennedysVillasList;
