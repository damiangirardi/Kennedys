import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Loginsignup from "../components/loginsignup";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import GroupComponent from "../components/group-component";
import AdditionalServices from "../components/additional-services";
import VuesaxlinearheartIcon1 from "../components/vuesaxlinearheart-icon1";
import VuesaxlinearlocationIcon1 from "../components/vuesaxlinearlocation-icon1";
import FrameComponent9 from "../components/frame-component9";
import IconBrandFacebookColor1 from "../components/icon-brand-facebook-color1";
import IconSocialInstagram from "../components/icon-social-instagram";
import IconLinkedin from "../components/icon-linkedin";
import IconSocialTiktok from "../components/icon-social-tiktok";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import GroupComponent3 from "../components/group-component3";
import FormContainer from "../components/form-container";
import GroupComponent4 from "../components/group-component4";
import RealEstate1 from "../components/real-estate1";
import VuesaxlinearmessagesIcon from "../components/vuesaxlinearmessages-icon";
import Card1 from "../components/card1";
import IconPhone from "../components/icon-phone";
import NavvuesaxlinearProperty38Icon from "../components/navvuesaxlinear-property38-icon";
import NavvuesaxlinearProperty37Icon from "../components/navvuesaxlinear-property37-icon";
import styles from "./index.module.css";

const KennedysHomepage: NextPage = () => {
  const [isLoginsignupOpen, setLoginsignupOpen] = useState(false);
  const router = useRouter();

  const openLoginsignup = useCallback(() => {
    setLoginsignupOpen(true);
  }, []);

  const closeLoginsignup = useCallback(() => {
    setLoginsignupOpen(false);
  }, []);

  const onCardContainerClick = useCallback(() => {
    router.push("/real-estate");
  }, [router]);

  const onCardContainerClick1 = useCallback(() => {
    router.push("/we-manage");
  }, [router]);

  const onCardContainerClick2 = useCallback(() => {
    router.push("/kennedys-concierge");
  }, [router]);

  const onCardContainerClick3 = useCallback(() => {
    router.push("/kennedys-events");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/kennedys-concierge-in-mykonos");
  }, [router]);

  const onGroupContainerClick1 = useCallback(() => {
    router.push("/kennedys-villas-list");
  }, [router]);

  const onViewMoreTextClick = useCallback(() => {
    router.push("/kennedys-villas");
  }, [router]);

  return (
    <>
      <div className={styles.kennedysHomepage}>
        <section className={styles.topDestinationBackground} />
        <img
          className={styles.kennedysHomepageChild}
          alt=""
          src="/rectangle-45@2x.png"
        />
        <section className={styles.kennedysHomepageItem} />
        <GroupComponent
          eventTypeImage="/rectangle-51@2x.png"
          private1="Private"
          events="Events"
          experienceExclusivityAsWeRedefi="Experience exclusivity as we redefine sophistication for your occasions, ensuring a tailored atmosphere."
          eventTypeIcons="/vector-7.svg"
        />
        <GroupComponent
          privateLeft="515px"
          eventTypeImage="/image@2x.png"
          eventsWidth="361.7px"
          experienceExclusivityAsHeight="103.3px"
          private1={`Mice &`}
          events="incentives"
          experienceExclusivityAsWeRedefi="Achieve excellence with our solutions crafted to inspire, motivate, and reward your team."
          propLeft="148.7px"
          propWidth="213px"
          eventTypeIcons="/vector-7-1.svg"
          propWidth1="132px"
        />
        <div className={styles.imageParent} onClick={onGroupContainerClick}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.weddingsParent}>
            <h2 className={styles.weddings}>Weddings</h2>
            <div className={styles.celebrateYourLove}>
              Celebrate your love story in style with our curated weddings,
              where every detail is planned for unforgettable memories.
            </div>
            <img className={styles.groupChild} alt="" src="/vector-7-2.svg" />
          </div>
        </div>
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
        <button className={styles.buttons}>
          <div className={styles.label}>Plan Your Event With Us Today!</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
        <button className={styles.buttons1}>
          <div className={styles.label1}>View More About Real Estate</div>
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        </button>
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
        <section className={styles.discoverTheMost}>
          Discover the Most Sought-After Destinations for Your Next Luxury
          Getaway
        </section>
        <h1 className={styles.topRatedDestinations}>Top-Rated Destinations</h1>
        <div className={styles.unforgettableEvents}>
          <h1 className={styles.unforgettableEvents1}>UNFORGETTABLE EVENTS</h1>
        </div>
        <div className={styles.heroBanner}>
          <div className={styles.frameParent}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
            </div>
            <div className={styles.groupItem} />
          </div>
          <img
            className={styles.heroBannerChild}
            loading="lazy"
            alt=""
            src="/group-86@2x.png"
          />
        </div>
        <AdditionalServices />
        <div className={styles.vectorParent} onClick={onGroupContainerClick1}>
          <img className={styles.groupInner} alt="" src="/vector-6.svg" />
          <div className={styles.tulum}>TULUM</div>
          <div className={styles.tulumDescription}>376</div>
          <div className={styles.luxuryVillas}>Luxury Villas</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-51-1@2x.png"
          />
          <div className={styles.vuesaxlinearheartWrapper}>
            <VuesaxlinearheartIcon1
              vuesaxlinearheart="/vuesaxlinearheart.svg"
              propHeight="18px"
              propWidth="18px"
            />
          </div>
          <VuesaxlinearlocationIcon1 />
        </div>
        <a className={styles.viewMore} onClick={onViewMoreTextClick}>
          View more
        </a>
        <div className={styles.heroBanner1}>
          <div className={styles.ibizaLocationParent}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon2} alt="" src="/vector-4.svg" />
            </div>
            <div className={styles.ellipseDiv} />
          </div>
          <img
            className={styles.heroBannerChild}
            loading="lazy"
            alt=""
            src="/group-86-2@2x.png"
          />
        </div>
        <div className={styles.eleganceBackground} />
        <FrameComponent9 />
        <div className={styles.vectorGroup} onClick={onGroupContainerClick1}>
          <img className={styles.groupChild1} alt="" src="/vector-6-1.svg" />
          <div className={styles.tulum}>IBIZA</div>
          <div className={styles.ibizaDescription}>210</div>
          <div className={styles.luxuryVillas1}>Luxury Villas</div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-51-2@2x.png"
          />
          <div className={styles.vuesaxlinearheartWrapper}>
            <VuesaxlinearheartIcon1
              vuesaxlinearheart="/vuesaxlinearheart.svg"
              propHeight="18px"
              propWidth="18px"
            />
          </div>
          <VuesaxlinearlocationIcon1 />
        </div>
        <div className={styles.viewAllEvents}>View all events</div>
        <div className={styles.craftingTimelessMemories}>
          Crafting Timeless Memories with Every Occasion
        </div>
        <div className={styles.vectorContainer}>
          <img className={styles.groupChild3} alt="" src="/vector-11.svg" />
          <div className={styles.iconBrandFacebookColorParent}>
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
        <section className={styles.adventureBanner}>
          <img
            className={styles.adventureBannerChild}
            loading="lazy"
            alt=""
            src="/frame-5011.svg"
          />
          <h1 className={styles.discoverYourNextContainer}>
            <p className={styles.discoverYour}>DISCOVER YOUR</p>
            <p className={styles.discoverYour}>
              <span>{`NEXT `}</span>
              <span className={styles.adventure}>ADVENTURE</span>
            </p>
          </h1>
        </section>
        <section className={styles.clientsWrapper}>
          <div className={styles.clients}>
            <h1 className={styles.ourClients}>Our Clients</h1>
            <img
              className={styles.meganisiVillaIcon}
              loading="lazy"
              alt=""
              src="/rectangle-67@2x.png"
            />
          </div>
        </section>
        <div
          className={styles.rectangleParent}
          onClick={onGroupContainerClick1}
        >
          <img
            className={styles.heroBannerInner}
            alt=""
            src="/rectangle-51-3@2x.png"
          />
          <div className={styles.vuesaxlinearheartFrame}>
            <VuesaxlinearheartIcon1
              vuesaxlinearheart="/vuesaxlinearheart.svg"
              propHeight="18px"
              propWidth="18px"
            />
          </div>
        </div>
        <div className={styles.heroBanner2} onClick={onGroupContainerClick1}>
          <img
            className={styles.heroBannerInner}
            alt=""
            src="/rectangle-51-4@2x.png"
          />
          <div className={styles.vuesaxlinearheartWrapper}>
            <VuesaxlinearheartIcon1
              vuesaxlinearheart="/vuesaxlinearheart.svg"
              propHeight="18px"
              propWidth="18px"
            />
          </div>
        </div>
        <div className={styles.heroBanner3}>
          <div className={styles.parent}>
            <div className={styles.div}>210</div>
            <div className={styles.luxuryVillas2}>Luxury Villas</div>
          </div>
          <h1 className={styles.mykonos}>mYkonos</h1>
          <div className={styles.heroBannerChild1} />
        </div>
        <div className={styles.heroBanner4}>
          <div className={styles.group}>
            <div className={styles.div1}>40</div>
            <div className={styles.chalets}>Chalets</div>
          </div>
          <h1 className={styles.courchevel}>COURCHEVEL</h1>
          <div className={styles.heroBannerChild2} />
        </div>
        <section className={styles.luxuryRental}>
          <h1 className={styles.luxuryVillaAndContainer}>
            <p className={styles.discoverYour}>
              <span className={styles.luxury}>{`luxury `}</span>
              <span>villa</span>
            </p>
            <p className={styles.discoverYour}>
              <span>and</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.luxury}>{`chalet `}</span>
              <span className={styles.rental}>rental</span>
            </p>
          </h1>
          <img
            className={styles.descriptionBackgroundIcon}
            loading="lazy"
            alt=""
            src="/rectangle-50@2x.png"
          />
          <GroupComponent3 />
          <FormContainer />
        </section>
        <GroupComponent4 />
        <RealEstate1 />
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
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </button>
              </div>
              <div className={styles.images}>
                <div className={styles.categoryImages}>
                  <div className={styles.categoryLabels}>
                    <a className={styles.explore}>EXPLORE</a>
                  </div>
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
                    <div className={styles.adventure1}>ADVENTURE</div>
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
                    <p className={styles.discoverYour}>{`Mykonos `}</p>
                    <p className={styles.discoverYour}>{`Bodrum `}</p>
                    <p className={styles.discoverYour}>{`Ibiza `}</p>
                    <p className={styles.discoverYour}>{`Antiparos `}</p>
                  </div>
                  <div className={styles.athensRivieraCreteContainer}>
                    <p className={styles.discoverYour}>{`Athens Riviera `}</p>
                    <p className={styles.discoverYour}>{`Crete `}</p>
                    <p className={styles.discoverYour}>{`Greek Islands `}</p>
                    <p className={styles.discoverYour}>{`Meganisi `}</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor}>
                  Luxury Villas for Rent
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.mykonosVillasBodrumVillasContainer}>
                    <p className={styles.discoverYour}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.discoverYour}>Ibiza Villas</p>
                    <p className={styles.discoverYour}>Tulum Villas</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.popularServices}>Popular Services</div>
                <div className={styles.chauffeurCarRentalYachtsPrParent}>
                  <div className={styles.mykonosVillasBodrumVillasContainer}>
                    <p className={styles.discoverYour}>Chauffeur</p>
                    <p className={styles.discoverYour}>Car Rental</p>
                    <p className={styles.discoverYour}>Yachts</p>
                    <p className={styles.discoverYour}>Private Chef</p>
                  </div>
                  <div className={styles.privateSecurityKidsContainer}>
                    <p className={styles.discoverYour}>Private Security</p>
                    <p className={styles.discoverYour}>Kids Entertainment</p>
                    <p className={styles.discoverYour}>Helicopter Flights</p>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.luxuryVillasFor1}>
                  Luxury Villas for Sale
                </div>
                <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                  <div className={styles.mykonosVillasBodrumVillasContainer}>
                    <p className={styles.discoverYour}>
                      Mykonos Villas Bodrum Villas
                    </p>
                    <p className={styles.discoverYour}>Ibiza Villas</p>
                    <p className={styles.discoverYour}>Tulum Villas</p>
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
                    <p className={styles.discoverYour}>
                      Dimarchou Aggelou Metaxa 21 Glyfada, 166 75, Athens,
                    </p>
                    <p className={styles.discoverYour}>
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
                <div className={styles.socialIcons}>
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
        <section className={styles.cards}>
          <Card1
            onCardContainerClick={onCardContainerClick}
            image="/image-8@2x.png"
            title="Real Estate "
          />
          <Card1
            onCardContainerClick={onCardContainerClick1}
            image="/rectangle-39@2x.png"
            propGap="1px"
            title="Vacation Rentals"
          />
          <Card1
            onCardContainerClick={onCardContainerClick1}
            image="/image-9@2x.png"
            propGap="8px"
            title="Villa Management"
          />
          <Card1
            onCardContainerClick={onCardContainerClick2}
            image="/image-101@2x.png"
            propGap="unset"
            title="Global Concierge"
          />
          <Card1
            onCardContainerClick={onCardContainerClick3}
            image="/rectangle-39-1@2x.png"
            propGap="8px"
            title="Event production"
          />
          <Card1
            image="/image-111@2x.png"
            propGap="8px"
            title="Travel Design"
          />
        </section>
        <header className={styles.navFinal}>
          <div className={styles.topMenu}>
            <div className={styles.button}>
              <IconPhone iconPhone="/icon--phone.svg" />
              <a
                className={styles.contactLabels}
                href="tel:+302108947139"
                target="_blank"
              >
                +30 21089 47139
              </a>
            </div>
            <div className={styles.button1}>
              <img
                className={styles.vuesaxlinearsmsIcon}
                alt=""
                src="/vuesaxlinearsms-1.svg"
              />
              <div className={styles.contact}>Contact</div>
            </div>
          </div>
          <div className={styles.topNav}>
            <nav className={styles.mainLinks}>
              <div
                className={styles.vacationRentals}
                onClick={onViewMoreTextClick}
              >
                Vacation Rentals
              </div>
              <div
                className={styles.concierge1}
                onClick={onCardContainerClick2}
              >
                Concierge
              </div>
              <div className={styles.events1} onClick={onCardContainerClick3}>
                Events
              </div>
              <div
                className={styles.realEstate1}
                onClick={onCardContainerClick}
              >
                Real Estate
              </div>
            </nav>
            <img
              className={styles.capa1Icon}
              loading="lazy"
              alt=""
              src="/capa-1.svg"
            />
            <div className={styles.right}>
              <div
                className={styles.weManageYour}
                onClick={onCardContainerClick1}
              >
                We Manage Your Villas
              </div>
              <button className={styles.logIn} onClick={openLoginsignup}>
                <div className={styles.logIn1}>Log In</div>
              </button>
              <div className={styles.image5}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image-12@2x.png"
                />
                <NavvuesaxlinearProperty38Icon navvuesaxlinearProperty39="/navvuesaxlinearproperty-39.svg" />
              </div>
              <NavvuesaxlinearProperty37Icon navvuesaxlinearProperty38="/navvuesaxlinearproperty-38.svg" />
            </div>
          </div>
        </header>
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

export default KennedysHomepage;
