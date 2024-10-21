import type { NextPage } from "next";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import FrameComponent14 from "../components/frame-component14";
import FrameComponent15 from "../components/frame-component15";
import NewsItem from "../components/news-item";
import NewsDetails from "../components/news-details";
import Blue from "../components/blue";
import Partners from "../components/partners";
import VuesaxlinearmessagesIcon from "../components/vuesaxlinearmessages-icon";
import NavFinal from "../components/nav-final";
import FrameComponent13 from "../components/frame-component13";
import GroupComponent5 from "../components/group-component5";
import WhyChooseContainer from "../components/why-choose-container";
import styles from "./kennedys-concierge.module.css";

const KennedysConcierge: NextPage = () => {
  return (
    <div className={styles.kennedysConcierge}>
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
      <section className={styles.welcomeBackgroundParent}>
        <img
          className={styles.welcomeBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-83@2x.png"
        />
        <div className={styles.welcomeToKennedysWayOfLiWrapper}>
          <div className={styles.welcomeToKennedysContainer}>
            <p className={styles.welcomeToKennedys}>
              Welcome to Kennedy’s Way of Life.
            </p>
            <p className={styles.welcomeToKennedys}>
              We promise to live up to your highest of expectations!
            </p>
          </div>
        </div>
        <h1 className={styles.globalConcierge}>Global CONCIERGE</h1>
      </section>
      <div className={styles.breadcumbs}>
        <div className={styles.home}>Home</div>
        <div className={styles.homeLabel}>{`>`}</div>
        <div className={styles.concierge}>Concierge</div>
      </div>
      <div className={styles.topShapeParent}>
        <img className={styles.topShapeIcon} alt="" src="/vector-11.svg" />
        <div className={styles.iconBrandFacebookColorParent}>
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
      <FrameComponent14 />
      <FrameComponent15 />
      <section className={styles.detail}>
        <h1 className={styles.trustUsToContainer}>
          <p
            className={styles.welcomeToKennedys}
          >{`Trust us to handle every detail, `}</p>
          <p className={styles.welcomeToKennedys}>
            enjoy the ultimate in luxury and comfort.
          </p>
        </h1>
      </section>
      <section className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.myblossom}>
            <div className={styles.myblossomChild} />
            <img
              className={styles.myblossomItem}
              alt=""
              src="/rectangle-771@2x.png"
            />
            <div className={styles.travelDesignByMyBlossomParent}>
              <div className={styles.travelDesignByMyContainer}>
                <p className={styles.welcomeToKennedys}>Travel design</p>
                <p className={styles.by}>{`BY     my blossom `}</p>
              </div>
              <div className={styles.fromItineraryPlanning}>
                From itinerary planning to accommodations and beyond, trust us
                to handle all the intricacies of your journey seamlessly.
              </div>
              <div className={styles.buttons}>
                <div className={styles.label}>Start Your Journey</div>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
            <img className={styles.myblossomInner} alt="" src="/vector-8.svg" />
            <img className={styles.capa1Icon} alt="" src="/capa-12.svg" />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-63@2x.png"
            />
          </div>
          <div className={styles.news}>
            <h1 className={styles.weAreOn}>We are on the news</h1>
            <div className={styles.newsGrid}>
              <NewsItem
                newsBackground="/rectangle-391@2x.png"
                newsIconPair="/vector-3.svg"
              />
              <NewsItem
                newsBackground="/rectangle-39-13@2x.png"
                newsIconPair="/vector-3.svg"
              />
              <NewsDetails
                newsDetailBackground="/rectangle-39-22@2x.png"
                newsDetailIcon="/vector-51.svg"
              />
            </div>
          </div>
          <div className={styles.blue}>
            <div className={styles.col}>
              <div className={styles.popularLocations}>Popular Locations</div>
              <div className={styles.locationContent}>
                <div className={styles.mykonosBodrumIbizaContainer}>
                  <p className={styles.welcomeToKennedys}>{`Mykonos `}</p>
                  <p className={styles.welcomeToKennedys}>{`Bodrum `}</p>
                  <p className={styles.welcomeToKennedys}>{`Ibiza `}</p>
                  <p className={styles.welcomeToKennedys}>{`Antiparos `}</p>
                </div>
                <div className={styles.athensRivieraCreteContainer}>
                  <p
                    className={styles.welcomeToKennedys}
                  >{`Athens Riviera `}</p>
                  <p className={styles.welcomeToKennedys}>{`Crete `}</p>
                  <p className={styles.welcomeToKennedys}>{`Greek Islands `}</p>
                  <p className={styles.welcomeToKennedys}>{`Meganisi `}</p>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.luxuryVillasFor}>
                Luxury Villas for Rent
              </div>
              <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                <div className={styles.athensRivieraCreteContainer}>
                  <p className={styles.welcomeToKennedys}>
                    Mykonos Villas Bodrum Villas
                  </p>
                  <p className={styles.welcomeToKennedys}>Ibiza Villas</p>
                  <p className={styles.welcomeToKennedys}>Tulum Villas</p>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.popularServices}>Popular Services</div>
              <div className={styles.chauffeurCarRentalYachtsPrParent}>
                <div className={styles.athensRivieraCreteContainer}>
                  <p className={styles.welcomeToKennedys}>Chauffeur</p>
                  <p className={styles.welcomeToKennedys}>Car Rental</p>
                  <p className={styles.welcomeToKennedys}>Yachts</p>
                  <p className={styles.welcomeToKennedys}>Private Chef</p>
                </div>
                <div className={styles.privateSecurityKidsContainer}>
                  <p className={styles.welcomeToKennedys}>Private Security</p>
                  <p className={styles.welcomeToKennedys}>Kids Entertainment</p>
                  <p className={styles.welcomeToKennedys}>Helicopter Flights</p>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.luxuryVillasFor1}>
                Luxury Villas for Sale
              </div>
              <div className={styles.mykonosVillasBodrumVillasIWrapper}>
                <div className={styles.athensRivieraCreteContainer}>
                  <p className={styles.welcomeToKennedys}>
                    Mykonos Villas Bodrum Villas
                  </p>
                  <p className={styles.welcomeToKennedys}>Ibiza Villas</p>
                  <p className={styles.welcomeToKennedys}>Tulum Villas</p>
                </div>
              </div>
            </div>
          </div>
          <Blue
            vector="/vector-71.svg"
            logo="/logo.svg"
            iconBrandFacebookColor="/icon--brandfacebookcolor-1.svg"
            iconSocialInstagram="/icon--socialinstagram-1.svg"
            iconLinkedin="/icon--linkedin-1.svg"
            iconSocialTiktok="/icon--socialtiktok-1.svg"
          />
          <Partners
            image10="/image-102@2x.png"
            image11="/image-112@2x.png"
            image12="/image-121@2x.png"
            image13="/image-131@2x.png"
            image14="/image-141@2x.png"
            image15="/image-154@2x.png"
            image16="/image-161@2x.png"
          />
          <div className={styles.bottom}>
            <div className={styles.kennedysGroupVacation}>
              © 2024 Kennedys Group Vacation Rentals - Terms - Privacy
            </div>
          </div>
          <div className={styles.whatsap}>
            <VuesaxlinearmessagesIcon vuesaxlinearmessages="/vuesaxlinearmessages.svg" />
          </div>
        </div>
      </section>
      <NavFinal
        showImage={false}
        propLeft="-6px"
        vuesaxlinearsms="/vuesaxlinearsms2.svg"
        propWidth="118px"
        propWidth1="78px"
        capa1="/capa-1-3.svg"
        image="/image-12@2x.png"
        iconPhone="/icon--phone2.svg"
        navvuesaxlinearProperty39="/navvuesaxlinearproperty-392.svg"
        navvuesaxlinearProperty38="/navvuesaxlinearproperty-382.svg"
      />
      <FrameComponent13 />
      <GroupComponent5 />
      <WhyChooseContainer />
    </div>
  );
};

export default KennedysConcierge;
