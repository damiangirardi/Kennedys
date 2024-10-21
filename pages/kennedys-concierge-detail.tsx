import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Contact from "../components/contact";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import Other from "../components/other";
import IconSocialInstagram from "../components/icon-social-instagram";
import IconLinkedin from "../components/icon-linkedin";
import IconSocialTiktok from "../components/icon-social-tiktok";
import NavFinal from "../components/nav-final";
import FrameComponent20 from "../components/frame-component20";
import FrameComponent22 from "../components/frame-component22";
import FrameComponent21 from "../components/frame-component21";
import Form from "../components/form";
import styles from "./kennedys-concierge-detail.module.css";

const KennedysConciergeDetail: NextPage = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const router = useRouter();

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  const onConciergeTextClick = useCallback(() => {
    router.push("/kennedys-concierge");
  }, [router]);

  const onMykonosTextClick = useCallback(() => {
    router.push("/kennedys-concierge-list");
  }, [router]);

  const onChaufferTextClick = useCallback(() => {
    router.push("/kennedys-concierge-in-mykonos");
  }, [router]);

  return (
    <>
      <div className={styles.kennedysConciergeDetail}>
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
        <button className={styles.buttons} onClick={openContact}>
          <div className={styles.label}>Book Now</div>
          <img className={styles.vectorIcon} alt="" />
        </button>
        <div className={styles.breadcumbs}>
          <div className={styles.home}>Home</div>
          <div className={styles.separator}>{`>`}</div>
          <div className={styles.concierge}>Concierge</div>
          <div className={styles.separator}>{`>`}</div>
          <div className={styles.driveMeAround}>Drive me around</div>
        </div>
        <section className={styles.rectangleParent}>
          <img className={styles.frameChild} alt="" />
          <div className={styles.rectangleGroup}>
            <img className={styles.frameItem} loading="lazy" alt="" />
            <img className={styles.frameItem} loading="lazy" alt="" />
          </div>
        </section>
        <div className={styles.breadcumbs1}>
          <div className={styles.home}>Home</div>
          <div className={styles.separator}>{`>`}</div>
          <div className={styles.concierge1} onClick={onConciergeTextClick}>
            Concierge
          </div>
          <div className={styles.separator}>{`>`}</div>
          <div className={styles.mykonos} onClick={onMykonosTextClick}>
            Mykonos
          </div>
          <div className={styles.separator}>{`>`}</div>
          <div className={styles.chauffer} onClick={onChaufferTextClick}>
            Chauffer
          </div>
          <div className={styles.separator}>{`>`}</div>
          <div className={styles.rangeRover}>Range Rover</div>
        </div>
        <div className={styles.heartShapeParent}>
          <img className={styles.heartShapeIcon} alt="" />
          <div className={styles.socialIcons}>
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
          <img className={styles.vuesaxlinearheartIcon} loading="lazy" alt="" />
        </div>
        <img className={styles.kennedysConciergeDetailChild} alt="" />
        <Other />
        <footer className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.blue}>
              <div className={styles.col}>
                <div className={styles.popularLocations}>Popular Locations</div>
                <div className={styles.mykonosBodrumIbizaAntiparosParent}>
                  <div className={styles.mykonosBodrumIbizaContainer}>
                    <p className={styles.bodrum}>{`Mykonos `}</p>
                    <p className={styles.bodrum}>{`Bodrum `}</p>
                    <p className={styles.bodrum}>{`Ibiza `}</p>
                    <p className={styles.bodrum}>{`Antiparos `}</p>
                  </div>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.bodrum}>{`Athens Riviera `}</p>
                    <p className={styles.bodrum}>{`Crete `}</p>
                    <p className={styles.bodrum}>{`Greek Islands `}</p>
                    <p className={styles.bodrum}>{`Meganisi `}</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor}>
                  Luxury Villas for Rent
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.bodrum}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.bodrum}>Ibiza Villas</p>
                    <p className={styles.bodrum}>Tulum Villas</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.popularServices}>Popular Services</div>
                <div className={styles.chauffeurCarRentalYachtsPrParent}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.bodrum}>Chauffeur</p>
                    <p className={styles.bodrum}>Car Rental</p>
                    <p className={styles.bodrum}>Yachts</p>
                    <p className={styles.bodrum}>Private Chef</p>
                  </div>
                  <div className={styles.privateSecurityKidsContainer}>
                    <p className={styles.bodrum}>Private Security</p>
                    <p className={styles.bodrum}>Kids Entertainment</p>
                    <p className={styles.bodrum}>Helicopter Flights</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor1}>
                  Luxury Villas for Sale
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.bodrum}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.bodrum}>Ibiza Villas</p>
                    <p className={styles.bodrum}>Tulum Villas</p>
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
                <div className={styles.athensOfficeParent}>
                  <div
                    className={styles.popularServices}
                  >{`Athens Office `}</div>
                  <div className={styles.dimarchouAggelouMetaxaContainer}>
                    <p className={styles.bodrum}>
                      Dimarchou Aggelou Metaxa 21 Glyfada, 166 75, Athens,
                    </p>
                    <p className={styles.bodrum}>Greece +30 22890 28233</p>
                  </div>
                </div>
                <div className={styles.mykonosOfficeParent}>
                  <div
                    className={styles.popularServices}
                  >{`Mykonos Office `}</div>
                  <div className={styles.argirena84600}>
                    Argirena, 846 00, Mykonos, Greece +30 22890 28233
                  </div>
                </div>
              </div>
              <div className={styles.col7}>
                <div className={styles.buttons1}>
                  <div className={styles.label1}>
                    Sign up form our newsletter
                  </div>
                  <img className={styles.vectorIcon} alt="" />
                </div>
                <img className={styles.logoIcon} loading="lazy" alt="" />
                <div className={styles.logoSocialIcons}>
                  <img
                    className={styles.iconBrandFacebookColor1}
                    loading="lazy"
                    alt=""
                  />
                  <IconSocialInstagram iconSocialInstagram="pending_I454:5325;1215:7370" />
                  <IconLinkedin iconLinkedin="pending_I454:5325;1215:7371" />
                  <IconSocialTiktok iconSocialTiktok="pending_I454:5325;1215:7372" />
                </div>
              </div>
            </div>
            <div className={styles.partners}>
              <div className={styles.logoImages}>
                <div className={styles.partners1}>Partners</div>
                <img className={styles.image10Icon} loading="lazy" alt="" />
                <img className={styles.image11Icon} loading="lazy" alt="" />
                <img className={styles.image12Icon} loading="lazy" alt="" />
                <img className={styles.image13Icon} loading="lazy" alt="" />
                <img className={styles.image14Icon} loading="lazy" alt="" />
                <img className={styles.image15Icon} loading="lazy" alt="" />
                <img className={styles.image16Icon} loading="lazy" alt="" />
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
              />
            </div>
          </div>
        </footer>
        <NavFinal
          showImage={false}
          propLeft="0px"
          vuesaxlinearsms="pending_I463:192464;1215:7102"
          propWidth="118px"
          propWidth1="78px"
          capa1="pending_I463:192464;1215:7114"
          image="pending_I463:192464;1215:7135"
          iconPhone="pending_I463:192464;1215:7099"
          navvuesaxlinearProperty39="pending_I463:192464;1215:7136"
          navvuesaxlinearProperty38="pending_I463:192464;1215:7137"
        />
        <FrameComponent20 />
        <FrameComponent22 />
        <FrameComponent21 />
        <Form />
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

export default KennedysConciergeDetail;
