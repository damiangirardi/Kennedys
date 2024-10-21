import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Contact from "../components/contact";
import PortalPopup from "../components/portal-popup";
import Loginsignup from "../components/loginsignup";
import FrameComponent10 from "../components/frame-component10";
import SimilarVillasHeader from "../components/similar-villas-header";
import IconBrandFacebookColor1 from "../components/icon-brand-facebook-color1";
import IconSocialInstagram from "../components/icon-social-instagram";
import IconLinkedin from "../components/icon-linkedin";
import IconSocialTiktok from "../components/icon-social-tiktok";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import FrameComponent11 from "../components/frame-component11";
import { useRouter } from "next/router";
import VuesaxlinearmessagesIcon from "../components/vuesaxlinearmessages-icon";
import PropertyDetails from "../components/property-details";
import IconPhone from "../components/icon-phone";
import NavvuesaxlinearProperty38Icon from "../components/navvuesaxlinear-property38-icon";
import NavvuesaxlinearProperty37Icon from "../components/navvuesaxlinear-property37-icon";
import VillaPricing from "../components/villa-pricing";
import DistancesImage from "../components/distances-image";
import Experiences from "../components/experiences";
import styles from "./kennedys-villa-detail1.module.css";

const KennedysVillaDetail1: NextPage = () => {
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

  const onGroupImageClick = useCallback(() => {
    router.push("/kennedys-concierge-in-mykonos");
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
      <div className={styles.kennedysVillaDetail}>
        <section className={styles.detailsLayout} />
        <section className={styles.detailsLayout1} />
        <section className={styles.detailsLayout2} />
        <div className={styles.detailsLayout3} />
        <img
          className={styles.villaDetailIcon}
          alt=""
          src="/villa-detail@2x.png"
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
        <section className={styles.kennedysVillaDetailChild} />
        <FrameComponent10 />
        <SimilarVillasHeader />
        <div className={styles.footerIcons}>
          <img
            className={styles.footerIconsChild}
            alt=""
            src="/vector-11.svg"
          />
          <div className={styles.socialIcons}>
            <IconBrandFacebookColor1 iconBrandFacebookColor="/icon--brandfacebookcolor.svg" />
            <IconSocialInstagram iconSocialInstagram="/icon--socialinstagram.svg" />
            <IconLinkedin iconLinkedin="/icon--linkedin.svg" />
            <IconSocialTiktok iconSocialTiktok="/icon--socialtiktok.svg" />
          </div>
          <VuesaxlinearheartIcon
            vuesaxlinearheart="/vuesaxlinearheart-2.svg"
            propPosition="absolute"
            propTop="293px"
            propLeft="2.3px"
          />
        </div>
        <section className={styles.kennedysVillaDetailItem} />
        <section className={styles.aboutTheresaParent}>
          <h1 className={styles.aboutTheresa}>About Theresa</h1>
          <div className={styles.villaTheresaIsContainer}>
            <p className={styles.villaTheresaIs}>
              Villa Theresa is a luxury modern villa surrounded by pure nature
              views and the area’s natural fauna.
            </p>
            <p className={styles.villaTheresaIs}>
              This amazing property is in the area of Kranidi in Portoheli
              overlooking the endless blue. The Villa is very close to the
              beautiful beach of Porto Heli. Some would say the ultimate villa
              to spend your holidays with friends and family.
            </p>
          </div>
        </section>
        <FrameComponent11 />
        <div className={styles.buttonsWrapper} onClick={openContact}>
          <div className={styles.buttons}>
            <div className={styles.label}>Need personalized assistance</div>
            <img className={styles.moreIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <div className={styles.shortInfo} />
        <div className={styles.shortInfoParent}>
          <div className={styles.shortInfo1} />
          <div className={styles.buttons1} onClick={openContact}>
            <div className={styles.label1}>Contact Now</div>
            <img className={styles.moreIcon} alt="" src="/vector.svg" />
          </div>
          <img className={styles.unionIcon} alt="" src="/union2.svg" />
          <div className={styles.otherServicesInTheresaParent}>
            <div className={styles.otherServicesIn}>
              Other services in Theresa
            </div>
            <div className={styles.groupParent}>
              <div className={styles.groupContainer}>
                <div className={styles.frameParent}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className={styles.groupChild} />
                </div>
                <img
                  className={styles.groupItem}
                  alt=""
                  src="/group-863@2x.png"
                />
              </div>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-501@2x.png"
                  onClick={onGroupImageClick}
                />
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-541@2x.png"
                  onClick={onGroupImageClick}
                />
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="/group-491@2x.png"
                  onClick={onGroupImageClick}
                />
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/group-551@2x.png"
                  onClick={onGroupImageClick}
                />
                <div className={styles.uniqueExperiences}>
                  UNIQUE EXPERIENCES
                </div>
                <div className={styles.driveMeAroundContainer}>
                  <p className={styles.villaTheresaIs}>DRIVE</p>
                  <p className={styles.villaTheresaIs}>ME AROUND</p>
                </div>
                <div className={styles.keepMeSafe}>KEEP ME SAFE</div>
                <div className={styles.sailMeAway}>SAIL ME AWAY</div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.travelDesign}>
              <div className={styles.title}>
                <div className={styles.title1}>
                  <div className={styles.travelDesign1}>TRAVEL DESIGN</div>
                  <h1 className={styles.exploreTheWorld}>EXPLORE the world</h1>
                  <h1
                    className={styles.withOurOwn}
                  >{`With OUR OWN TRAVEL AGENCY `}</h1>
                </div>
              </div>
              <div className={styles.title2}>
                <div className={styles.fromPlanningTo}>
                  From Planning to Booking, We Handle Every Detail
                </div>
                <button className={styles.buttons2}>
                  <div className={styles.label2}>
                    Start Your Stress-Free Journey
                  </div>
                  <img className={styles.moreIcon} alt="" src="/vector.svg" />
                </button>
              </div>
              <div className={styles.images}>
                <div className={styles.imageLayout}>
                  <button className={styles.imageTitles}>
                    <div className={styles.explore}>EXPLORE</div>
                  </button>
                </div>
                <div className={styles.image}>
                  <button className={styles.unwindWrapper}>
                    <div className={styles.unwind}>UNWIND</div>
                  </button>
                </div>
                <div className={styles.image1}>
                  <button className={styles.experienceWrapper}>
                    <div className={styles.experience}>Experience</div>
                  </button>
                </div>
                <div className={styles.image2}>
                  <button className={styles.inspireWrapper}>
                    <div className={styles.inspire}>INSPIRE</div>
                  </button>
                </div>
                <div className={styles.image3}>
                  <button className={styles.adventureWrapper}>
                    <div className={styles.adventure}>ADVENTURE</div>
                  </button>
                </div>
                <div className={styles.image4}>
                  <button className={styles.discoverWrapper}>
                    <div className={styles.discover}>Discover</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.blue}>
              <div className={styles.col}>
                <div className={styles.popularLocations}>Popular Locations</div>
                <div className={styles.locationLists}>
                  <div className={styles.mykonosBodrumIbizaContainer}>
                    <p className={styles.villaTheresaIs}>{`Mykonos `}</p>
                    <p className={styles.villaTheresaIs}>{`Bodrum `}</p>
                    <p className={styles.villaTheresaIs}>{`Ibiza `}</p>
                    <p className={styles.villaTheresaIs}>{`Antiparos `}</p>
                  </div>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.villaTheresaIs}>{`Athens Riviera `}</p>
                    <p className={styles.villaTheresaIs}>{`Crete `}</p>
                    <p className={styles.villaTheresaIs}>{`Greek Islands `}</p>
                    <p className={styles.villaTheresaIs}>{`Meganisi `}</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor}>
                  Luxury Villas for Rent
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.mykonosVillasBodrumVillasContainer}>
                    <p className={styles.villaTheresaIs}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.villaTheresaIs}>Ibiza Villas</p>
                    <p className={styles.villaTheresaIs}>Tulum Villas</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.popularServices}>Popular Services</div>
                <div className={styles.chauffeurCarRentalYachtsPrParent}>
                  <div className={styles.mykonosVillasBodrumVillasContainer}>
                    <p className={styles.villaTheresaIs}>Chauffeur</p>
                    <p className={styles.villaTheresaIs}>Car Rental</p>
                    <p className={styles.villaTheresaIs}>Yachts</p>
                    <p className={styles.villaTheresaIs}>Private Chef</p>
                  </div>
                  <div className={styles.privateSecurityKidsContainer}>
                    <p className={styles.villaTheresaIs}>Private Security</p>
                    <p className={styles.villaTheresaIs}>Kids Entertainment</p>
                    <p className={styles.villaTheresaIs}>Helicopter Flights</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor1}>
                  Luxury Villas for Sale
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.mykonosVillasBodrumVillasContainer}>
                    <p className={styles.villaTheresaIs}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.villaTheresaIs}>Ibiza Villas</p>
                    <p className={styles.villaTheresaIs}>Tulum Villas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blue1}>
              <div className={styles.col4}>
                <div className={styles.villas}>Villas</div>
                <div className={styles.concierge}>Concierge</div>
                <div className={styles.concierge}>Events</div>
                <div className={styles.concierge}>Real Estate</div>
                <div className={styles.villas}>Travel Design</div>
              </div>
              <div className={styles.col4}>
                <div className={styles.weManage}>We Manage</div>
                <div className={styles.concierge}>About Us</div>
                <div className={styles.weManage}>We are on the News</div>
                <div className={styles.concierge}>Contact Us</div>
                <div className={styles.concierge}>Sitemap</div>
              </div>
              <div className={styles.col6}>
                <div className={styles.officeAddresses}>
                  <div
                    className={styles.popularServices}
                  >{`Athens Office `}</div>
                  <div className={styles.dimarchouAggelouMetaxaContainer}>
                    <p className={styles.villaTheresaIs}>
                      Dimarchou Aggelou Metaxa 21 Glyfada, 166 75, Athens,
                    </p>
                    <p className={styles.villaTheresaIs}>
                      Greece +30 22890 28233
                    </p>
                  </div>
                </div>
                <div className={styles.officeAddresses}>
                  <div
                    className={styles.popularServices}
                  >{`Mykonos Office `}</div>
                  <div className={styles.argirena84600}>
                    Argirena, 846 00, Mykonos, Greece +30 22890 28233
                  </div>
                </div>
              </div>
              <div className={styles.col7}>
                <div className={styles.buttons3}>
                  <div className={styles.label3}>
                    Sign up form our newsletter
                  </div>
                  <img
                    className={styles.moreIcon}
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
                <div className={styles.socialMediaIcons}>
                  <IconBrandFacebookColor1 iconBrandFacebookColor="/icon--brandfacebookcolor-1.svg" />
                  <IconSocialInstagram iconSocialInstagram="/icon--socialinstagram-1.svg" />
                  <IconLinkedin iconLinkedin="/icon--linkedin-1.svg" />
                  <IconSocialTiktok iconSocialTiktok="/icon--socialtiktok-1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.partners}>
              <div className={styles.partnerLogos}>
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
            <footer className={styles.bottom}>
              <div className={styles.kennedysGroupVacation}>
                © 2024 Kennedys Group Vacation Rentals - Terms - Privacy
              </div>
            </footer>
            <div className={styles.whatsap}>
              <VuesaxlinearmessagesIcon vuesaxlinearmessages="/vuesaxlinearmessages.svg" />
            </div>
          </div>
        </section>
        <PropertyDetails />
        <img
          className={styles.image2Icon}
          loading="lazy"
          alt=""
          src="/image-23@2x.png"
        />
        <div
          className={styles.theresaCanComfortably}
        >{`Theresa can comfortably accommodate up to 10 guests within its 5 bedrooms.  On the  villa, the guest can find a spacious living and dining area, a fully equipped kitchen, three double bedrooms with en-suite bathrooms, 1 twin bedroom with en – suite bathroom and 1 guest room with a double bed, en- suite bathroom and an independent entrance. `}</div>
        <div className={styles.outdoorSpacesDescription}>
          <h1
            className={styles.villaTheresaOffer}
          >{`Villa Theresa offer  beautiful outdoor spaces with a spacious swimming pool. `}</h1>
          <div className={styles.theGuestsWould}>
            The guests would have the  the opportunity to share unforgettable
            moments with their beloved ones while enjoying a refreshing cocktail
            by the pools. The family atmosphere and the surrounding pure
            landscape are inviting and can offer you moments of ultimate
            relaxation!
          </div>
        </div>
        <section className={styles.bedrooms}>
          <div className={styles.bedroomCount}>
            <img
              className={styles.bedroomCountChild}
              alt=""
              src="/group-1074@2x.png"
            />
            <div className={styles.bedrooms1}>5 bedrooms</div>
            <div className={styles.bedroomCountInner}>
              <div className={styles.capa1Wrapper}>
                <div className={styles.capa1} />
              </div>
            </div>
          </div>
          <div className={styles.diningArea}>
            <img
              className={styles.diningAreaChild}
              loading="lazy"
              alt=""
              src="/group-1052@2x.png"
            />
            <div className={styles.spaciousLivingAnd}>
              Spacious living and dining area
            </div>
            <div className={styles.bedroomCountInner}>
              <div className={styles.capa1Wrapper}>
                <div className={styles.capa1} />
              </div>
            </div>
          </div>
          <div className={styles.kitchen}>
            <img
              className={styles.kitchenChild}
              loading="lazy"
              alt=""
              src="/group-1061@2x.png"
            />
            <div className={styles.kitchenLabel}>
              <div className={styles.fullyEquippedKitchen}>
                fully equipped kitchen
              </div>
            </div>
          </div>
          <div className={styles.pool}>
            <img
              className={styles.poolChild}
              loading="lazy"
              alt=""
              src="/group-1082@2x.png"
            />
            <div className={styles.swimmingPool}>SWIMMING POOL</div>
          </div>
        </section>
        <img
          className={styles.descriptionSeparatorIcon}
          loading="lazy"
          alt=""
          src="/description-separator@2x.png"
        />
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
            <nav className={styles.navigationLinks}>
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
              <button className={styles.logIn} onClick={openLoginsignup}>
                <div className={styles.logIn1}>Log In</div>
              </button>
              <div className={styles.image5}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-12@2x.png"
                />
                <NavvuesaxlinearProperty38Icon navvuesaxlinearProperty39="/navvuesaxlinearproperty-392.svg" />
              </div>
              <NavvuesaxlinearProperty37Icon navvuesaxlinearProperty38="/navvuesaxlinearproperty-382.svg" />
            </div>
          </div>
        </header>
        <VillaPricing />
        <button className={styles.buttons4} onClick={openContact}>
          <div className={styles.label4}>Contact Us</div>
          <img className={styles.moreIcon} alt="" src="/vector.svg" />
        </button>
        <button className={styles.buttons5} onClick={openContact}>
          <div className={styles.label4}>Contact Us</div>
          <img className={styles.moreIcon} alt="" src="/vector.svg" />
        </button>
        <section className={styles.villaDetails}>
          <img
            className={styles.unionIcon1}
            loading="lazy"
            alt=""
            src="/union-1.svg"
          />
          <h3 className={styles.saquareFootage}>Saquare Footage</h3>
          <h3 className={styles.staffAndServices}>Staff and Services</h3>
          <h3 className={styles.needToKnow}>Need to Know</h3>
          <div className={styles.infoBlockImage} />
          <div className={styles.villaDetailsChild} />
          <div className={styles.needToKnowPlaceholder} />
          <div className={styles.servicesIncludedWithContainer}>
            <p className={styles.servicesIncludedWith}>
              Services included with this booking:
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.servicesIncludedWith}>Daily</p>
            <ul className={styles.mayaLuxeConciergeSpeaksE}>
              <li className={styles.housekeeping}>
                <span
                  className={styles.mayaLuxeConcierge}
                >{`Maya Luxe Concierge - Speaks English & Spanish`}</span>
              </li>
              <li className={styles.housekeeping}>
                <span className={styles.mayaLuxeConcierge}>Housekeeping</span>
              </li>
              <li className={styles.housekeeping}>
                <span className={styles.mayaLuxeConcierge}>&nbsp;</span>
              </li>
            </ul>
            <p className={styles.servicesIncludedWith}>
              At an additional cost:
            </p>
            <ul className={styles.mayaLuxeConciergeSpeaksE}>
              <li className={styles.housekeeping}>
                <span className={styles.mayaLuxeConcierge}>Chef Service</span>
              </li>
              <li className={styles.housekeeping}>
                <span className={styles.mayaLuxeConcierge}>
                  Chef services are available at an additional charge
                </span>
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.servicesIncludedWith}>Square Footage</p>
            <p className={styles.blankLine}>
              Interior: 1903 sq ft  |  Exterior: 1312 sq ft  |  Total: 2733 sq
              ft
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.servicesIncludedWith}>
              What Maya Luxe Guests Think
            </p>
            <p
              className={styles.blankLine}
            >{`Our community's ratings & reviews for this villa.`}</p>
          </div>
        </section>
        <DistancesImage />
        <section className={styles.theresaDescriptionParent}>
          <div className={styles.theresaDescription}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-19@2x.png"
            />
            <img
              className={styles.theresaDescriptionChild}
              loading="lazy"
              alt=""
              src="/group-203@2x.png"
            />
            <img
              className={styles.theresaDescriptionItem}
              loading="lazy"
              alt=""
              src="/group-204@2x.png"
            />
            <div className={styles.theresaSummary}>
              <img
                className={styles.theresaSummaryChild}
                loading="lazy"
                alt=""
                src="/group-197@2x.png"
              />
            </div>
            <div className={styles.moreDescription}>
              <img
                className={styles.theresaSummaryChild}
                loading="lazy"
                alt=""
                src="/group-197-1@2x.png"
              />
            </div>
          </div>
          <h1 className={styles.moreAboutTheresa}>More About Theresa</h1>
          <div className={styles.slider}>
            <div className={styles.sliderChild} />
            <div className={styles.sliderItem} />
            <div className={styles.sliderItem} />
            <div className={styles.sliderItem} />
            <div className={styles.sliderItem} />
          </div>
        </section>
        <Experiences />
        <section className={styles.package}>
          <div className={styles.packagesContainer}>
            <div className={styles.packageDetails}>
              <div className={styles.row}>
                <div className={styles.block}>
                  <h3 className={styles.stars}>5 Stars</h3>
                  <div className={styles.indulgeInA}>
                    Indulge in a stress-free getaway with personalized itinerary
                    planning, VIP access, and seamless coordination of your
                    travel needs.
                  </div>
                </div>
                <div className={styles.block}>
                  <h3 className={styles.stars1}>6 stars</h3>
                  <div className={styles.indulgeInA}>
                    Elevate your experience with enhanced services, including
                    24/7 dedicated concierge support, expedited access, and
                    prime seating at top venues and events.
                  </div>
                </div>
                <div className={styles.block}>
                  <h3 className={styles.stars2}>7 stars</h3>
                  <div className={styles.indulgeInA}>
                    Reach for the sky with our most exclusive package, offering
                    unlimited changes to your itinerary, personalized assistance
                    throughout your stay, and access to the most coveted
                    experiences and venues worldwide.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.packageFeatures}>
            <div className={styles.featureList}>
              <div className={styles.featureList}>
                <div className={styles.featureItemChild} />
                <div className={styles.featureDescription}>
                  <h1 className={styles.villaTheresaOffer}>
                    Personalized itineraries and bookings inTheresa
                  </h1>
                  <div className={styles.experienceLuxuryAtContainer}>
                    <p className={styles.experienceLuxuryAt}>
                      Experience luxury at its finest with our range of
                      Concierge Packages tailored to meet your every need.
                      Choose from our
                    </p>
                    <p className={styles.villaTheresaIs}>
                      <span className={styles.star6StarAnd}>
                        5-star, 6-star, and 7-star packages,
                      </span>
                      <span className={styles.eachOfferingA}>
                        {" "}
                        each offering a unique blend of services to ensure an
                        unforgettable experience.
                      </span>
                    </p>
                  </div>
                </div>
                <img
                  className={styles.featureItemItem}
                  alt=""
                  src="/rectangle-521@2x.png"
                />
                <img
                  className={styles.featureItemInner}
                  loading="lazy"
                  alt=""
                  src="/rectangle-65@2x.png"
                />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-661@2x.png"
                />
              </div>
            </div>
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

export default KennedysVillaDetail1;
