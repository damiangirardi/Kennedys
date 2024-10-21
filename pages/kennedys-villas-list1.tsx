import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Loginsignup from "../components/loginsignup";
import PortalPopup from "../components/portal-popup";
import IconClose from "../components/icon-close";
import Card3 from "../components/card3";
import FrameComponent12 from "../components/frame-component12";
import Nav from "../components/nav";
import { useRouter } from "next/router";
import VuesaxlinearaddIcon from "../components/vuesaxlinearadd-icon";
import FilterOptionList from "../components/filter-option-list";
import IconChevron from "../components/icon-chevron";
import Checkbox from "../components/checkbox";
import styles from "./kennedys-villas-list1.module.css";

const KennedysVillasList1: NextPage = () => {
  const [isLoginsignupOpen, setLoginsignupOpen] = useState(false);
  const router = useRouter();

  const openLoginsignup = useCallback(() => {
    setLoginsignupOpen(true);
  }, []);

  const closeLoginsignup = useCallback(() => {
    setLoginsignupOpen(false);
  }, []);

  const onRectangleClick = useCallback(() => {
    router.push("/kennedys-villas-list");
  }, [router]);

  return (
    <>
      <div className={styles.kennedysVillasList} onClick={openLoginsignup}>
        <main className={styles.tagsParent}>
          <div className={styles.tags}>
            <div className={styles.tag}>
              <img
                className={styles.leadingIcon}
                alt=""
                src="/leadingicon9.svg"
              />
              <div className={styles.label}>Ibiza</div>
              <div className={styles.number}>(3)</div>
              <IconClose />
            </div>
            <div className={styles.tag}>
              <img
                className={styles.leadingIcon}
                alt=""
                src="/leadingicon9.svg"
              />
              <div className={styles.label}>Pool</div>
              <div className={styles.number}>(3)</div>
              <IconClose />
            </div>
            <div className={styles.tag}>
              <img
                className={styles.leadingIcon}
                alt=""
                src="/leadingicon9.svg"
              />
              <div className={styles.label}>Bar</div>
              <div className={styles.number}>(3)</div>
              <IconClose />
            </div>
          </div>
          <div className={styles.villasFound}>12 Villas Found</div>
          <div className={styles.vuesaxlineararchiveTick}>
            <img
              className={styles.vuesaxlineararchiveTickIcon}
              alt=""
              src="/vuesaxlineararchivetick.svg"
            />
          </div>
          <Card3
            imageCard="/card-image@2x.png"
            title="Mia"
            capa1="/capa-1-4@2x.png"
          />
          <Card3
            imageCard="/rectangle-39-11@2x.png"
            title="Narcisa"
            capa1="/capa-1-4@2x.png"
            propLeft="0px"
          />
          <Card3
            imageCard="/rectangle-39-2@2x.png"
            title="Antonella"
            capa1="/capa-1-4@2x.png"
            propLeft="0px"
          />
          <Card3
            imageCard="/image-61@2x.png"
            title="Carmen"
            capa1="/capa-1-7@2x.png"
            propLeft="7.6px"
          />
          <Card3
            imageCard="/image-71@2x.png"
            title="Sara"
            capa1="/capa-1-7@2x.png"
            propLeft="7.6px"
          />
          <Card3
            imageCard="/image-81@2x.png"
            title="Camila"
            capa1="/capa-1-7@2x.png"
            propLeft="7.6px"
          />
          <Card3
            imageCard="/rectangle-39-3@2x.png"
            title="Casa Gody"
            capa1="/capa-1-10@2x.png"
            propLeft="7.6px"
          />
          <Card3
            imageCard="/rectangle-39-4@2x.png"
            title="Narcisa"
            capa1="/capa-1-10@2x.png"
            propLeft="7.6px"
          />
          <Card3
            imageCard="/image-91@2x.png"
            title="Valeria"
            capa1="/capa-1-10@2x.png"
            propLeft="7.6px"
          />
          <Card3
            imageCard="/rectangle-39-5@2x.png"
            title="Narcisa"
            capa1="/capa-1-9@2x.png"
            propLeft="7.6px"
          />
          <Card3
            imageCard="/rectangle-39-5@2x.png"
            title="Narcisa"
            capa1="/capa-1-9@2x.png"
            propLeft="7.6px"
          />
          <Card3
            imageCard="/rectangle-39-7@2x.png"
            title="Mimesis"
            capa1="/capa-1-9@2x.png"
            propLeft="7.6px"
          />
        </main>
        <div className={styles.kennedysVillasListChild} />
        <div className={styles.kennedysVillasListItem} />
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
          <img
            className={styles.vuesaxlinearheartIcon}
            loading="lazy"
            alt=""
            src="/vuesaxlinearheart-2.svg"
          />
        </div>
        <div className={styles.breadcumbs}>
          <div className={styles.home}>Home</div>
          <div className={styles.breadcrumbList}>{`>`}</div>
          <div className={styles.villas}>Villas</div>
          <div className={styles.breadcrumbList}>{`>`}</div>
          <div className={styles.mykonos}>Mykonos</div>
        </div>
        <FrameComponent12 />
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
          propWidth5="126px"
          propHeight9="unset"
          propHeight10="unset"
          propHeight11="unset"
          propWidth6="80px"
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
        />
        <div
          className={styles.kennedysVillasListInner}
          onClick={onRectangleClick}
        />
        <div className={styles.filters}>
          <div className={styles.filterContent}>
            <div className={styles.filtersTop}>
              <div className={styles.filters1}>Filters</div>
              <VuesaxlinearaddIcon vuesaxlinearadd="/vuesaxlinearadd.svg" />
            </div>
            <div className={styles.filterOptionListParent}>
              <FilterOptionList
                location1="Location"
                leadingIcon="/leading-icon1.svg"
                all="All"
                leadingIcon1="/leadingicon.svg"
                trailingIcon="/trailingicon.svg"
                leadingIcon2="/leadingicon.svg"
                trailingIcon1="/trailingicon.svg"
                trailingIcon2="/trailing-icon2.svg"
                iconChevron="/icon--chevron.svg"
                propWidth1="24px"
                propHeight="24px"
              />
              <FilterOptionList
                propWidth="406px"
                propAlignSelf="unset"
                location1="Property Type"
                propAlignSelf1="unset"
                propFlexWrap="unset"
                propAlignContent="unset"
                propFlex="unset"
                leadingIcon="/leading-icon1.svg"
                propFlex1="unset"
                propMinWidth="unset"
                all="All"
                propPadding="0px 19px 0px 0px"
                propAlignSelf2="unset"
                leadingIcon1="/leadingicon.svg"
                trailingIcon="/trailingicon.svg"
                leadingIcon2="/leadingicon.svg"
                trailingIcon1="/trailingicon.svg"
                trailingIcon2="/trailing-icon2.svg"
                iconChevron="/icon--chevron.svg"
                propWidth1="24px"
                propHeight="24px"
              />
              <div className={styles.price}>
                <div className={styles.priceRange}>Price Range</div>
                <img className={styles.priceChild} alt="" src="/line-2.svg" />
                <div className={styles.priceInput}>
                  <div className={styles.fieldText}>
                    <img
                      className={styles.leadingIcon3}
                      alt=""
                      src="/leading-icon1.svg"
                    />
                    <div className={styles.container}>
                      <div className={styles.minPlaceholder}>$</div>
                      <input
                        className={styles.noMin}
                        placeholder="No Min$"
                        type="text"
                      />
                      <div className={styles.chips}>
                        <div className={styles.chip}>
                          <img
                            className={styles.leadingIcon4}
                            alt=""
                            src="/leadingicon.svg"
                          />
                          <div className={styles.label3}>{`Chip `}</div>
                          <b className={styles.number3}>213</b>
                          <img
                            className={styles.trailingIcon}
                            alt=""
                            src="/trailingicon.svg"
                          />
                        </div>
                        <div className={styles.chip}>
                          <img
                            className={styles.leadingIcon4}
                            alt=""
                            src="/leadingicon.svg"
                          />
                          <div className={styles.label3}>Chip</div>
                          <b className={styles.number3}>213</b>
                          <img
                            className={styles.trailingIcon}
                            alt=""
                            src="/trailingicon.svg"
                          />
                        </div>
                        <div className={styles.div}>+2</div>
                      </div>
                    </div>
                    <img
                      className={styles.leadingIcon3}
                      alt=""
                      src="/trailing-icon13.svg"
                    />
                  </div>
                  <div className={styles.fieldText}>
                    <img
                      className={styles.leadingIcon3}
                      alt=""
                      src="/leading-icon1.svg"
                    />
                    <div className={styles.container}>
                      <div className={styles.minPlaceholder}>$</div>
                      <input
                        className={styles.noMin}
                        placeholder="No Max$"
                        type="text"
                      />
                      <div className={styles.chips}>
                        <div className={styles.chip}>
                          <img
                            className={styles.leadingIcon4}
                            alt=""
                            src="/leadingicon.svg"
                          />
                          <div className={styles.label3}>{`Chip `}</div>
                          <b className={styles.number3}>213</b>
                          <img
                            className={styles.trailingIcon}
                            alt=""
                            src="/trailingicon.svg"
                          />
                        </div>
                        <div className={styles.chip}>
                          <img
                            className={styles.leadingIcon4}
                            alt=""
                            src="/leadingicon.svg"
                          />
                          <div className={styles.label3}>Chip</div>
                          <b className={styles.number3}>213</b>
                          <img
                            className={styles.trailingIcon}
                            alt=""
                            src="/trailingicon.svg"
                          />
                        </div>
                        <div className={styles.div}>+2</div>
                      </div>
                    </div>
                    <img
                      className={styles.leadingIcon3}
                      alt=""
                      src="/trailing-icon13.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.filterOptionList}>
                <FilterOptionList
                  propWidth="unset"
                  propAlignSelf="stretch"
                  location1="Bedrooms"
                  propAlignSelf1="unset"
                  propFlexWrap="unset"
                  propAlignContent="unset"
                  propFlex="1"
                  leadingIcon="/leading-icon1.svg"
                  propFlex1="unset"
                  propMinWidth="unset"
                  all="Any"
                  propPadding="unset"
                  propAlignSelf2="stretch"
                  leadingIcon1="/leadingicon.svg"
                  trailingIcon="/trailingicon.svg"
                  leadingIcon2="/leadingicon.svg"
                  trailingIcon1="/trailingicon.svg"
                  trailingIcon2="/trailing-icon2.svg"
                />
                <FilterOptionList
                  propWidth="unset"
                  propAlignSelf="stretch"
                  location1="Bathrooms"
                  propAlignSelf1="unset"
                  propFlexWrap="unset"
                  propAlignContent="unset"
                  propFlex="1"
                  leadingIcon="/leading-icon1.svg"
                  propFlex1="unset"
                  propMinWidth="unset"
                  all="Any"
                  propPadding="unset"
                  propAlignSelf2="stretch"
                  leadingIcon1="/leadingicon.svg"
                  trailingIcon="/trailingicon.svg"
                  leadingIcon2="/leadingicon.svg"
                  trailingIcon1="/trailingicon.svg"
                  trailingIcon2="/trailing-icon2.svg"
                />
              </div>
              <div className={styles.outdoor}>
                <div className={styles.priceRange}>Outdoor</div>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label7}>Pool</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label8}>Heated pool</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label9}>Jacuzzi</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label10}>
                        Walking distance to beach
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label11}>
                        Private Sea/Beach access
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label12}>Outdoor Gym</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label13}>Cinema</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label14}>Ice plunge</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label15}>Sauna</div>
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.container2}>
                      <input className={styles.check} type="checkbox" />
                      <div className={styles.label16}>Padel court</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label17}>Tennis court</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label18}>Basketball court</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label19}>Sound system</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label20}>Bar</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label21}>{`BBQ & Dining`}</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label22}>Helipad</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label23}>Dock</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label24}>Church</div>
                    </div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label24}>Parking</div>
                    </div>
                  </div>
                  <div className={styles.facilitiesMore}>
                    <div className={styles.more}>More</div>
                    <IconChevron
                      iconChevron="/icon--chevron-2.svg"
                      propWidth="20px"
                      propHeight="20px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.outdoor}>
                <div className={styles.priceRange}>
                  Luxury Indoor Facilities
                </div>
                <div className={styles.checkboxParent}>
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Indoor Pool"
                    propWidth1="87px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Gym"
                    propWidth1="36px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Fitness room"
                    propWidth1="97px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Hammam"
                    propWidth1="73px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Sauna"
                    propWidth1="47px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Massage room"
                    propWidth1="110px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Home Cinema"
                    propWidth1="107px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Club"
                    propWidth1="36px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Elevator"
                    propWidth1="61px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Security"
                    propWidth1="62px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <div className={styles.checkbox19}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label26}>Elevator</div>
                    </div>
                  </div>
                  <div className={styles.facilitiesMore}>
                    <div className={styles.more}>More</div>
                    <IconChevron
                      iconChevron="/icon--chevron-2.svg"
                      propWidth="20px"
                      propHeight="20px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.outdoor}>
                <div className={styles.priceRange}>Location</div>
                <div className={styles.checkboxParent}>
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Waterfront"
                    propWidth1="81px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Beachfront"
                    propWidth1="83px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Resort Access"
                    propWidth1="106px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Resort Access"
                    propWidth1="106px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Walking distance to a village"
                    propWidth1="213px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Private"
                    propWidth1="52px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <div className={styles.checkbox19}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label27}>City New</div>
                    </div>
                  </div>
                  <div className={styles.checkbox19}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label28}>Beachfront</div>
                    </div>
                  </div>
                  <div className={styles.moreGroup}>
                    <div className={styles.more2}>More</div>
                    <IconChevron
                      iconChevron="/icon--chevron-2.svg"
                      propWidth="20px"
                      propHeight="20px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.outdoor}>
                <div className={styles.priceRange}>View</div>
                <div className={styles.checkboxParent}>
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Sunset View"
                    propWidth1="92px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Sea View"
                    propWidth1="69px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Mountain View"
                    propWidth1="111px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Town View"
                    propWidth1="80px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <div className={styles.checkbox19}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label27}>City New</div>
                    </div>
                  </div>
                  <div className={styles.checkbox19}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label28}>Beachfront</div>
                    </div>
                  </div>
                  <div className={styles.moreGroup}>
                    <div className={styles.more2}>More</div>
                    <IconChevron
                      iconChevron="/icon--chevron-2.svg"
                      propWidth="20px"
                      propHeight="20px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.outdoor}>
                <div className={styles.priceRange}>Property Status</div>
                <div className={styles.checkboxParent}>
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Fully staffed"
                    propWidth1="90px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Semi staffed"
                    propWidth1="93px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label={`Housekeeping & Daily cleaning`}
                    propWidth1="unset"
                    propDisplay="unset"
                    propAlignItems="unset"
                    propFlex="1"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Suitable for children"
                    propWidth1="152px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Suitable for events"
                    propWidth1="140px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    propWidth="229px"
                    propHeight="20px"
                    propAlignSelf="unset"
                    iconCheck="/icon--check6.svg"
                    label="Suitable for the disabled"
                    propWidth1="183px"
                    propDisplay="flex"
                    propAlignItems="center"
                    propFlex="unset"
                  />
                  <Checkbox
                    iconCheck="/icon--check6.svg"
                    label="Pet friendly"
                  />
                  <div className={styles.checkbox19}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label27}>City New</div>
                    </div>
                  </div>
                  <div className={styles.checkbox19}>
                    <div className={styles.container2}>
                      <div className={styles.check10}>
                        <img
                          className={styles.iconCheck1}
                          alt=""
                          src="/icon--check6.svg"
                        />
                      </div>
                      <div className={styles.label28}>Beachfront</div>
                    </div>
                  </div>
                  <div className={styles.moreGroup}>
                    <div className={styles.more2}>More</div>
                    <IconChevron
                      iconChevron="/icon--chevron-2.svg"
                      propWidth="20px"
                      propHeight="20px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.buttons}>
              <div className={styles.label33}>Clear Filters</div>
            </div>
            <div className={styles.buttons1} onClick={onRectangleClick}>
              <div className={styles.label34}>Show 21 Services</div>
              <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
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

export default KennedysVillasList1;
