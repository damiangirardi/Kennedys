import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Contact from "../components/contact";
import PortalPopup from "../components/portal-popup";
import IconPhone from "../components/icon-phone";
import NavvuesaxlinearProperty38Icon from "../components/navvuesaxlinear-property38-icon";
import NavvuesaxlinearProperty37Icon from "../components/navvuesaxlinear-property37-icon";
import { useRouter } from "next/router";
import Filters from "../components/filters";
import ServicesWrapper from "../components/services-wrapper";
import VuesaxlinearheartIcon1 from "../components/vuesaxlinearheart-icon1";
import ServicesCard from "../components/services-card";
import IconBrandFacebookColor1 from "../components/icon-brand-facebook-color1";
import IconSocialInstagram from "../components/icon-social-instagram";
import IconLinkedin from "../components/icon-linkedin";
import IconSocialTiktok from "../components/icon-social-tiktok";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import VillaGrid from "../components/villa-grid";
import VuesaxlinearmessagesIcon from "../components/vuesaxlinearmessages-icon";
import VuesaxlinearaddIcon from "../components/vuesaxlinearadd-icon";
import FilterOptionList from "../components/filter-option-list";
import ServiceTypeFilter from "../components/service-type-filter";
import PriceFilter from "../components/price-filter";
import styles from "./kennedys-concierge-list-men.module.css";

const KennedysConciergeListMen: NextPage = () => {
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

  const onMoreServicesContainerClick = useCallback(() => {
    router.push("/kennedys-concierge-in-mykonos");
  }, [router]);

  const onFilterBackgroundClick = useCallback(() => {
    router.push("/kennedys-concierge-list");
  }, [router]);

  return (
    <>
      <div className={styles.kennedysConciergeListMen}>
        <main className={styles.container}>
          <header className={styles.nav}>
            <div className={styles.topMenu}>
              <div className={styles.button}>
                <IconPhone iconPhone="pending_I637:5675;461:7560" />
                <a
                  className={styles.a}
                  href="tel:+302108947139"
                  target="_blank"
                >
                  +30 21089 47139
                </a>
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.vuesaxlinearsmsIcon}
                  loading="lazy"
                  alt=""
                />
                <div className={styles.contact}>Contact</div>
              </div>
            </div>
            <div className={styles.topNav}>
              <nav className={styles.navLinks}>
                <div className={styles.vacationRentals}>Vacation Rentals</div>
                <div className={styles.concierge}>Concierge</div>
                <div className={styles.events}>Events</div>
                <div className={styles.realEstate}>Real Estate</div>
              </nav>
              <img className={styles.capa1Icon} loading="lazy" alt="" />
              <div className={styles.right}>
                <div className={styles.weManageYour}>We Manage Your Villas</div>
                <button className={styles.logIn}>
                  <div className={styles.logIn1}>Log In</div>
                </button>
                <div className={styles.image}>
                  <img className={styles.imageIcon} alt="" />
                  <NavvuesaxlinearProperty38Icon navvuesaxlinearProperty39="pending_I637:5675;972:8479" />
                </div>
                <NavvuesaxlinearProperty37Icon navvuesaxlinearProperty38="pending_I637:5675;746:3485" />
              </div>
            </div>
          </header>
          <div className={styles.breadcrumb}>
            <div className={styles.background} />
            <div className={styles.breadcumbs}>
              <a className={styles.home}>Home</a>
              <div className={styles.breadcrumbLinks}>{`>`}</div>
              <a className={styles.concierge1} onClick={onConciergeTextClick}>
                Concierge
              </a>
              <div className={styles.breadcrumbLinks}>{`>`}</div>
              <div className={styles.mykonos}>Mykonos</div>
            </div>
          </div>
          <section className={styles.mainContent}>
            <Filters />
            <div className={styles.serviceDescription}>
              <div className={styles.descriptionContent}>
                <h1 className={styles.conciergeServicesIn}>
                  Concierge Services in Mykonos
                </h1>
                <div className={styles.ourConciergeServices}>
                  Our concierge services offer unparalleled luxury and
                  personalized attention. From bespoke itineraries and 24/7
                  support to exclusive access and seamless coordination, we
                  ensure every detail is expertly managed to provide you with a
                  truly exceptional experience.
                </div>
              </div>
            </div>
            <div className={styles.servicePackages}>
              <ServicesWrapper
                rectangle52="pending_750:5414"
                rectangle65="pending_750:5415"
                rectangle66="pending_750:5416"
              />
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
              <div className={styles.buttons} onClick={openContact}>
                <div className={styles.label}>Contact Now</div>
                <img className={styles.viewPackagesIcon} alt="" />
              </div>
            </div>
            <div className={styles.serviceCardContainer}>
              <div
                className={styles.moreServices}
                onClick={onMoreServicesContainerClick}
              >
                <div className={styles.servicesCard}>
                  <img className={styles.additionalCardBackgrounds} alt="" />
                  <div className={styles.cardIconsFirst}>
                    <VuesaxlinearheartIcon1
                      vuesaxlinearheart="pending_I637:5715;972:6998"
                      propHeight="18px"
                      propWidth="18px"
                    />
                  </div>
                  <div className={styles.title}>CONCIERGE PACKAGES</div>
                  <div className={styles.ourConciergeServicesContainer}>
                    <p className={styles.whenItComes}>
                      5 Stars - 6 Stars - 7 Stars
                    </p>
                    <p className={styles.whenItComes}>
                      When it comes to top-notch concierge services, our team of
                      concierge experts at Kennedy’s Group is undoubtedly the
                      way to go.
                    </p>
                  </div>
                  <div className={styles.viewMore}>View More</div>
                </div>
                <ServicesCard
                  propAlignSelf="stretch"
                  rectangle39="pending_I637:5716;594:4968"
                  title="Yacht Rental"
                  ourConciergeServices
                  propFlex="1"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5716;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
                <ServicesCard
                  propAlignSelf="stretch"
                  rectangle39="pending_I637:5717;594:4968"
                  title="Chauffeur"
                  ourConciergeServices
                  propFlex="1"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5717;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
              </div>
              <div
                className={styles.moreServices}
                onClick={onMoreServicesContainerClick}
              >
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5719;594:4968"
                  title="Security services"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5719;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5720;594:4968"
                  title="Jet Charter"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5720;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5721;594:4968"
                  title="Dedicated Chefs"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5721;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
              </div>
              <div
                className={styles.moreServices}
                onClick={onMoreServicesContainerClick}
              >
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5723;594:4968"
                  title="Unique Experiences"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5723;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5724;594:4968"
                  title="Yacht Rental"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5724;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5725;594:4968"
                  title="Chauffeur"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5725;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
              </div>
              <div
                className={styles.moreServices}
                onClick={onMoreServicesContainerClick}
              >
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5727;594:4968"
                  title="Security services"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5727;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5728;594:4968"
                  title="Jet Charter"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5728;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
                <ServicesCard
                  propAlignSelf="unset"
                  rectangle39="pending_I637:5729;594:4968"
                  title="Dedicated Chefs"
                  ourConciergeServices
                  propFlex="unset"
                  propWidth="unset"
                  propAlignSelf1="stretch"
                  vuesaxlinearheart="pending_I637:5729;972:6998"
                  propHeight="18px"
                  propWidth1="18px"
                />
              </div>
            </div>
            <div className={styles.socialMedia}>
              <img className={styles.heartIcon} loading="lazy" alt="" />
              <div className={styles.socialMediaIcons}>
                <IconBrandFacebookColor1 iconBrandFacebookColor="pending_637:5733" />
                <IconSocialInstagram iconSocialInstagram="pending_637:5734" />
                <IconLinkedin iconLinkedin="pending_637:5735" />
                <IconSocialTiktok iconSocialTiktok="pending_637:5736" />
              </div>
              <VuesaxlinearheartIcon
                vuesaxlinearheart="pending_637:5737"
                propPosition="absolute"
                propTop="293px"
                propLeft="2.3px"
              />
            </div>
          </section>
          <section className={styles.villasBackgroundParent}>
            <div className={styles.villasBackground} />
            <h1 className={styles.popularVillasVillas}>
              POPULAR VILLAS VILLAS IN MYKONOS
            </h1>
            <VillaGrid />
            <div className={styles.buttons1} onClick={openContact}>
              <div className={styles.label1}>View More Villas</div>
              <img className={styles.viewPackagesIcon} alt="" />
            </div>
          </section>
          <section className={styles.where}>
            <h1 className={styles.popularLocations}>Popular Locations</h1>
            <div className={styles.slider}>
              <img className={styles.sliderChild} alt="" />
              <div className={styles.locationButtons}>
                <div className={styles.locationNames}>
                  <h1 className={styles.mykonos1}>MyKONOS</h1>
                </div>
                <div className={styles.locationNames1}>
                  <h1 className={styles.bodrum}>BODRUM</h1>
                </div>
                <div className={styles.locationNames2}>
                  <h1 className={styles.ibiza}>IBIZA</h1>
                </div>
              </div>
              <div className={styles.locationButtonIconParent}>
                <div className={styles.locationButtonIcon}>
                  <img className={styles.vectorIcon1} alt="" />
                </div>
                <div className={styles.locationButtonCircle} />
              </div>
            </div>
          </section>
          <section className={styles.footer}>
            <div className={styles.footer1}>
              <div className={styles.blue}>
                <div className={styles.col}>
                  <div className={styles.popularLocations1}>
                    Popular Locations
                  </div>
                  <div className={styles.locationLinks}>
                    <div className={styles.mykonosBodrumIbizaContainer}>
                      <p className={styles.whenItComes}>{`Mykonos `}</p>
                      <p className={styles.whenItComes}>{`Bodrum `}</p>
                      <p className={styles.whenItComes}>{`Ibiza `}</p>
                      <p className={styles.whenItComes}>{`Antiparos `}</p>
                    </div>
                    <div className={styles.athensRivieraCreteContainer}>
                      <p className={styles.whenItComes}>{`Athens Riviera `}</p>
                      <p className={styles.whenItComes}>{`Crete `}</p>
                      <p className={styles.whenItComes}>{`Greek Islands `}</p>
                      <p className={styles.whenItComes}>{`Meganisi `}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.luxuryVillasFor}>
                    Luxury Villas for Rent
                  </div>
                  <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                    <div className={styles.athensRivieraCreteContainer}>
                      <p className={styles.whenItComes}>
                        Mykonos Villas Bodrum Villas
                      </p>
                      <p className={styles.whenItComes}>Ibiza Villas</p>
                      <p className={styles.whenItComes}>Tulum Villas</p>
                    </div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.popularServices}>Popular Services</div>
                  <div className={styles.chauffeurCarRentalYachtsPrParent}>
                    <div className={styles.athensRivieraCreteContainer}>
                      <p className={styles.whenItComes}>Chauffeur</p>
                      <p className={styles.whenItComes}>Car Rental</p>
                      <p className={styles.whenItComes}>Yachts</p>
                      <p className={styles.whenItComes}>Private Chef</p>
                    </div>
                    <div className={styles.privateSecurityKidsContainer}>
                      <p className={styles.whenItComes}>Private Security</p>
                      <p className={styles.whenItComes}>Kids Entertainment</p>
                      <p className={styles.whenItComes}>Helicopter Flights</p>
                    </div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.luxuryVillasFor1}>
                    Luxury Villas for Sale
                  </div>
                  <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                    <div className={styles.athensRivieraCreteContainer}>
                      <p className={styles.whenItComes}>
                        Mykonos Villas Bodrum Villas
                      </p>
                      <p className={styles.whenItComes}>Ibiza Villas</p>
                      <p className={styles.whenItComes}>Tulum Villas</p>
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
                  <div className={styles.contactDetails}>
                    <div
                      className={styles.popularServices}
                    >{`Athens Office `}</div>
                    <div className={styles.dimarchouAggelouMetaxaContainer}>
                      <p className={styles.whenItComes}>
                        Dimarchou Aggelou Metaxa 21 Glyfada, 166 75, Athens,
                      </p>
                      <p className={styles.whenItComes}>
                        Greece +30 22890 28233
                      </p>
                    </div>
                  </div>
                  <div className={styles.contactDetails1}>
                    <div
                      className={styles.popularServices}
                    >{`Mykonos Office `}</div>
                    <div className={styles.argirena84600}>
                      Argirena, 846 00, Mykonos, Greece +30 22890 28233
                    </div>
                  </div>
                </div>
                <div className={styles.col7}>
                  <div className={styles.buttons2}>
                    <div className={styles.label2}>
                      Sign up form our newsletter
                    </div>
                    <img className={styles.viewPackagesIcon} alt="" />
                  </div>
                  <img className={styles.logoIcon} alt="" />
                  <div className={styles.socialIcons}>
                    <IconBrandFacebookColor1 iconBrandFacebookColor="pending_I637:5797;1215:7369" />
                    <IconSocialInstagram iconSocialInstagram="pending_I637:5797;1215:7370" />
                    <IconLinkedin iconLinkedin="pending_I637:5797;1215:7371" />
                    <IconSocialTiktok iconSocialTiktok="pending_I637:5797;1215:7372" />
                  </div>
                </div>
              </div>
              <div className={styles.partners}>
                <div className={styles.partnerLogos}>
                  <div className={styles.partners1}>Partners</div>
                  <img className={styles.image10Icon} alt="" />
                  <img className={styles.image11Icon} alt="" />
                  <img className={styles.image12Icon} alt="" />
                  <img className={styles.image13Icon} alt="" />
                  <img className={styles.image14Icon} alt="" />
                  <img className={styles.image15Icon} alt="" />
                  <img className={styles.image16Icon} alt="" />
                </div>
              </div>
              <footer className={styles.bottom}>
                <div className={styles.kennedysGroupVacation}>
                  © 2024 Kennedys Group Vacation Rentals - Terms - Privacy
                </div>
              </footer>
              <div className={styles.whatsap}>
                <VuesaxlinearmessagesIcon vuesaxlinearmessages="pending_I637:5797;1215:7386" />
              </div>
            </div>
          </section>
          <section
            className={styles.filterBackground}
            onClick={onFilterBackgroundClick}
          />
        </main>
        <form className={styles.filters}>
          <div className={styles.filterContentWrapper}>
            <div className={styles.filtersTop}>
              <div className={styles.filters1}>Filters</div>
              <VuesaxlinearaddIcon vuesaxlinearadd="pending_639:6535" />
            </div>
            <FilterOptionList
              propWidth="unset"
              propAlignSelf="stretch"
              location1="Location"
              propAlignSelf1="stretch"
              propFlexWrap="wrap"
              propAlignContent="center"
              propFlex="unset"
              leadingIcon="pending_637:5982"
              propFlex1="1"
              propMinWidth="226px"
              all="Mykonos"
              propPadding="0px 19px 0px 0px"
              propAlignSelf2="unset"
              leadingIcon1="pending_I637:5986;60:559"
              trailingIcon="pending_I637:5986;1770:24514"
              leadingIcon2="pending_I637:5987;60:559"
              trailingIcon1="pending_I637:5987;1770:24514"
              trailingIcon2="pending_637:5990"
              iconChevron="pending_637:5989"
              propWidth1="24px"
              propHeight="24px"
            />
            <ServiceTypeFilter />
            <PriceFilter />
          </div>
          <div className={styles.bottom1}>
            <div className={styles.buttons3}>
              <div className={styles.label3}>Clear Filters</div>
            </div>
            <button
              className={styles.buttons4}
              onClick={onFilterBackgroundClick}
            >
              <div className={styles.label4}>Show 21 Services</div>
              <img className={styles.viewPackagesIcon} alt="" />
            </button>
          </div>
        </form>
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

export default KennedysConciergeListMen;
