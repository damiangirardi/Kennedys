import type { NextPage } from "next";
import { useCallback } from "react";
import GroupComponent6 from "../components/group-component6";
import IconSocialInstagram from "../components/icon-social-instagram";
import IconLinkedin from "../components/icon-linkedin";
import IconSocialTiktok from "../components/icon-social-tiktok";
import NavFinal from "../components/nav-final";
import { useRouter } from "next/router";
import ServicesCard from "../components/services-card";
import styles from "./kennedys-concierge-in-mykonos.module.css";

const KennedysConciergeInMykonos: NextPage = () => {
  const router = useRouter();

  const onServiceCardsContainerClick = useCallback(() => {
    router.push("/kennedys-concierge-detail");
  }, [router]);

  return (
    <div className={styles.kennedysConciergeInMykonos}>
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
      <GroupComponent6 />
      <div className={styles.socialIcons}>
        <img className={styles.heartIcon} alt="" />
        <div className={styles.socialMediaIcons}>
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
      <h1 className={styles.otherServices}>Other Services</h1>
      <footer className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.blue}>
            <div className={styles.col}>
              <div className={styles.popularLocations}>Popular Locations</div>
              <div className={styles.locationLinks}>
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
                  <p className={styles.mykonos}>Mykonos Villas Bodrum Villas</p>
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
                  <p className={styles.mykonos}>Mykonos Villas Bodrum Villas</p>
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
              <div className={styles.officeLocations}>
                <div className={styles.popularServices}>{`Athens Office `}</div>
                <div className={styles.dimarchouAggelouMetaxaContainer}>
                  <p className={styles.mykonos}>
                    Dimarchou Aggelou Metaxa 21 Glyfada, 166 75, Athens,
                  </p>
                  <p className={styles.mykonos}>Greece +30 22890 28233</p>
                </div>
              </div>
              <div className={styles.officeLocations1}>
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
                <div className={styles.label}>Sign up form our newsletter</div>
                <img className={styles.vectorIcon} alt="" />
              </div>
              <img className={styles.logoIcon} loading="lazy" alt="" />
              <div className={styles.footerSocialIcons}>
                <img
                  className={styles.iconBrandFacebookColor1}
                  loading="lazy"
                  alt=""
                />
                <IconSocialInstagram iconSocialInstagram="pending_I454:5178;1215:7370" />
                <IconLinkedin iconLinkedin="pending_I454:5178;1215:7371" />
                <IconSocialTiktok iconSocialTiktok="pending_I454:5178;1215:7372" />
              </div>
            </div>
          </div>
          <div className={styles.partners}>
            <div className={styles.partnerLogos}>
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
        vuesaxlinearsms="pending_I463:192423;1215:7102"
        propWidth="118px"
        propWidth1="78px"
        capa1="pending_I463:192423;1215:7114"
        image="pending_I463:192423;1215:7135"
        iconPhone="pending_I463:192423;1215:7099"
        navvuesaxlinearProperty39="pending_I463:192423;1215:7136"
      />
      <div className={styles.chaufferInMykonosParent}>
        <h1 className={styles.chaufferInMykonos}>Chauffer in Mykonos</h1>
        <div className={styles.drivingOnYour}>
          Driving on your holidays, think again! For a large number of people
          driving in general, and driving around unknown roads in specific,
          constitutes quite an unpleasant challenge. Plus, having your own
          dedicated chauffeur for your holidays, kind of rocks! Our experienced
          and always-smiling team of professional drivers can be at your
          disposal 24/7, making your life as carefree and as stressless as
          possible. Take your pick from our vast collection of exclusive and VIP
          vans and vehicles and let our professional chauffeur take care of all
          the rest. Note that you can book our personal drivers’ services for
          only 12 hours per day or even less, if that is more to your liking.
        </div>
      </div>
      <section className={styles.cardsWrapper}>
        <div
          className={styles.serviceCards}
          onClick={onServiceCardsContainerClick}
        >
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5566;594:4968"
            title="Audi A3"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5567;594:4968"
            title="Range Rover"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5568;594:4968"
            title="WraNgler Jeep"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
        </div>
        <div
          className={styles.serviceCards}
          onClick={onServiceCardsContainerClick}
        >
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5647;594:4968"
            title="Range Rover"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5646;594:4968"
            title="Audi A3"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5648;594:4968"
            title="WraNgler Jeep"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
        </div>
        <div
          className={styles.serviceCards}
          onClick={onServiceCardsContainerClick}
        >
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5632;594:4968"
            title="WraNgler Jeep"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5630;594:4968"
            title="Audi A3"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
          <ServicesCard
            propAlignSelf="unset"
            rectangle39="pending_I594:5631;594:4968"
            title="Range Rover"
            ourConciergeServices
            propFlex="unset"
            propWidth="unset"
            propAlignSelf1="stretch"
          />
        </div>
      </section>
      <section className={styles.why}>
        <h1 className={styles.whyChooseOur}>Why choose our services</h1>
        <div className={styles.ourConciergeServices}>
          Our concierge services offer unparalleled luxury and personalized
          attention. From bespoke itineraries and 24/7 support to exclusive
          access and seamless coordination, we ensure every detail is expertly
          managed to provide you with a truly exceptional experience.
        </div>
      </section>
      <section className={styles.benefitItemsParent}>
        <div className={styles.benefitItems}>
          <img className={styles.benefitItemsChild} alt="" />
          <div className={styles.bestRates}>Best Rates</div>
          <div className={styles.weCanGuarantee}>
            We can guarantee you the best possible rates.
          </div>
        </div>
        <div className={styles.benefitItems1}>
          <img className={styles.benefitItemsItem} loading="lazy" alt="" />
          <div className={styles.availability}>24/7 Availability</div>
          <div className={styles.dedicatedDriverAvailable}>
            Dedicated driver available around the clock.
          </div>
        </div>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" />
          <div className={styles.content}>
            <div className={styles.professionalDrivers}>
              Professional Drivers
            </div>
            <div className={styles.dedicatedDriverAvailable}>
              our drivers are highly trained, extremely reliable, and utterly
              discreet.
            </div>
          </div>
        </div>
        <div className={styles.benefitItems2}>
          <img className={styles.benefitItemsInner} loading="lazy" alt="" />
          <div className={styles.englishSpakers}>English spèakers</div>
          <div className={styles.weCanGuarantee}>
            Our drivers speak very good English, so misunderstandings are out of
            the question when dealing with us.
          </div>
        </div>
      </section>
    </div>
  );
};

export default KennedysConciergeInMykonos;
