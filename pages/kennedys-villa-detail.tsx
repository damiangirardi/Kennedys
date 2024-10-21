import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Contact from "../components/contact";
import PortalPopup from "../components/portal-popup";
import Details from "../components/details";
import FrameComponent5 from "../components/frame-component5";
import VuesaxlinearheartIcon from "../components/vuesaxlinearheart-icon";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import DetailsPopup from "../components/details-popup";
import NavFinal from "../components/nav-final";
import LocationDistances from "../components/location-distances";
import ExperiencesTitle from "../components/experiences-title";
import VillaDetails from "../components/villa-details";
import styles from "./kennedys-villa-detail.module.css";

const KennedysVillaDetail: NextPage = () => {
  const [isContactOpen, setContactOpen] = useState(false);
  const router = useRouter();

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  const onGroupImageClick = useCallback(() => {
    router.push("/kennedys-concierge-in-mykonos");
  }, [router]);

  return (
    <>
      <div className={styles.kennedysVillaDetail}>
        <section className={styles.villaDetail} />
        <section className={styles.villaDetail1} />
        <section className={styles.villaDetail2} />
        <div className={styles.villaDetail3} />
        <img
          className={styles.kennedysVillaDetailChild}
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
        <section className={styles.kennedysVillaDetailItem} />
        <Details />
        <FrameComponent5 />
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
        <section className={styles.kennedysVillaDetailInner} />
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
        <FrameComponent4 />
        <div className={styles.viewDetailsButton} onClick={openContact}>
          <div className={styles.buttons}>
            <div className={styles.label}>Need personalized assistance</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <div className={styles.shortInfo} />
        <div className={styles.shortInfoParent}>
          <div className={styles.shortInfo1} />
          <div className={styles.buttons1} onClick={openContact}>
            <div className={styles.label1}>Contact Now</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
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
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className={styles.groupItem} />
                </div>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-863@2x.png"
                />
              </div>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-501@2x.png"
                  onClick={onGroupImageClick}
                />
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="/group-541@2x.png"
                  onClick={onGroupImageClick}
                />
                <img
                  className={styles.groupChild2}
                  alt=""
                  src="/group-491@2x.png"
                  onClick={onGroupImageClick}
                />
                <img
                  className={styles.groupChild3}
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
        <Footer
          propBackgroundImage="url('/category-images@3x.png')"
          propBackgroundImage1="url('/image1@3x.png')"
          propBackgroundImage2="url('/image2@3x.png')"
          propBackgroundImage3="url('/image3@3x.png')"
          propBackgroundImage4="url('/image4@3x.png')"
          propBackgroundImage5="url('/image5@3x.png')"
          logo="/logo.svg"
          image13="/image-13@2x.png"
          image16="/image-16@2x.png"
        />
        <DetailsPopup />
        <img className={styles.image2Icon} alt="" src="/image-23@2x.png" />
        <div
          className={styles.theresaCanComfortably}
        >{`Theresa can comfortably accommodate up to 10 guests within its 5 bedrooms.  On the  villa, the guest can find a spacious living and dining area, a fully equipped kitchen, three double bedrooms with en-suite bathrooms, 1 twin bedroom with en – suite bathroom and 1 guest room with a double bed, en- suite bathroom and an independent entrance. `}</div>
        <div className={styles.outdoorDescription}>
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
        <section className={styles.amenities}>
          <div className={styles.amenitiesList}>
            <img
              className={styles.bedroomIcon}
              alt=""
              src="/group-1074@2x.png"
            />
            <div className={styles.bedrooms}>5 bedrooms</div>
            <div className={styles.livingAreaIcon}>
              <div className={styles.livingIconContainer}>
                <div className={styles.capa1} />
              </div>
            </div>
          </div>
          <div className={styles.livingArea}>
            <img
              className={styles.kitchenIcon}
              loading="lazy"
              alt=""
              src="/group-1052@2x.png"
            />
            <div className={styles.spaciousLivingAnd}>
              Spacious living and dining area
            </div>
            <div className={styles.livingAreaIcon}>
              <div className={styles.livingIconContainer}>
                <div className={styles.capa1} />
              </div>
            </div>
          </div>
          <div className={styles.poolArea}>
            <img
              className={styles.poolIcon}
              loading="lazy"
              alt=""
              src="/group-1061@2x.png"
            />
            <div className={styles.poolDescription}>
              <div className={styles.fullyEquippedKitchen}>
                fully equipped kitchen
              </div>
            </div>
          </div>
          <div className={styles.swimmingPoolIconParent}>
            <img
              className={styles.swimmingPoolIcon}
              loading="lazy"
              alt=""
              src="/group-1082@2x.png"
            />
            <div className={styles.swimmingPool}>SWIMMING POOL</div>
          </div>
        </section>
        <img
          className={styles.amenitiesImageIcon}
          loading="lazy"
          alt=""
          src="/description-separator@2x.png"
        />
        <NavFinal
          showImage={false}
          propLeft="0px"
          vuesaxlinearsms="/vuesaxlinearsms2.svg"
          propWidth="126px"
          propWidth1="74px"
          capa1="/capa-1-3.svg"
          image="/image-12@2x.png"
          iconPhone="/icon--phone2.svg"
          navvuesaxlinearProperty39="/navvuesaxlinearproperty-392.svg"
          navvuesaxlinearProperty38="/navvuesaxlinearproperty-382.svg"
        />
        <button className={styles.buttons2} onClick={openContact}>
          <div className={styles.label2}>Contact Us</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
        <button className={styles.buttons3} onClick={openContact}>
          <div className={styles.label2}>Contact Us</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
        <section className={styles.additionalInfo}>
          <img
            className={styles.unionIcon1}
            loading="lazy"
            alt=""
            src="/union-1.svg"
          />
          <h3 className={styles.saquareFootage}>Saquare Footage</h3>
          <h3 className={styles.staffAndServices}>Staff and Services</h3>
          <h3 className={styles.needToKnow}>Need to Know</h3>
          <div className={styles.additionalInfoChild} />
          <div className={styles.additionalInfoItem} />
          <div className={styles.additionalInfoInner} />
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
        <LocationDistances />
        <section className={styles.moreTheresa}>
          <div className={styles.theresaContent}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-19@2x.png"
            />
            <img
              className={styles.theresaContentChild}
              loading="lazy"
              alt=""
              src="/group-203@2x.png"
            />
            <img
              className={styles.theresaContentItem}
              loading="lazy"
              alt=""
              src="/group-204@2x.png"
            />
            <div className={styles.imageContainerWrapper}>
              <img
                className={styles.imageContainerIcon}
                loading="lazy"
                alt=""
                src="/group-197@2x.png"
              />
            </div>
            <div className={styles.titleContainer}>
              <img
                className={styles.imageContainerIcon}
                loading="lazy"
                alt=""
                src="/group-197-1@2x.png"
              />
            </div>
          </div>
          <h1 className={styles.moreAboutTheresa}>More About Theresa</h1>
          <div className={styles.slider}>
            <div className={styles.sliderImages} />
            <div className={styles.sliderImages1} />
            <div className={styles.sliderImages1} />
            <div className={styles.sliderImages1} />
            <div className={styles.sliderImages1} />
          </div>
        </section>
        <ExperiencesTitle />
        <section className={styles.package}>
          <div className={styles.packageContainer}>
            <div className={styles.packageWrapper}>
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
          <div className={styles.personalizedServices}>
            <div className={styles.personalizedServicesContaine}>
              <div className={styles.personalizedServicesContaine}>
                <div className={styles.personalizedServicesWrapperChild} />
                <div className={styles.serviceDescription}>
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
                  className={styles.personalizedServicesWrapperItem}
                  alt=""
                  src="/rectangle-521@2x.png"
                />
                <img
                  className={styles.personalizedServicesWrapperInner}
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
        <VillaDetails />
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

export default KennedysVillaDetail;
