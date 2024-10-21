import type { NextPage } from "next";
import styles from "./villa-pricing.module.css";

export type VillaPricingType = {
  className?: string;
};

const VillaPricing: NextPage<VillaPricingType> = ({ className = "" }) => {
  return (
    <section className={[styles.villaPricing, className].join(" ")}>
      <div className={styles.priceBackground} />
      <div className={styles.priceAvailability} />
      <div className={styles.priceAvailability1} />
      <div className={styles.row}>
        <div className={styles.block}>
          <h3 className={styles.groundFloor}>GROUND FLOOR</h3>
          <div className={styles.openPlanLivingContainer}>
            <ul className={styles.openPlanLivingDiningArea}>
              <li
                className={styles.openPlanLiving}
              >{`Open plan Living & dining area with sea view and access to the pool area `}</li>
              <li className={styles.openPlanLiving}>Fully equipped kitchen</li>
              <li>3 Double bedrooms with en-suite bathrooms</li>
            </ul>
          </div>
        </div>
        <div className={styles.block1}>
          <div className={styles.stFloor}>
            <span>
              <span className={styles.span}>1</span>
              <span className={styles.stFloor1}>
                st
                <span className={styles.span}> FLOOR</span>
              </span>
            </span>
          </div>
          <div className={styles.openPlanLivingContainer}>
            <ul className={styles.openPlanLivingDiningArea}>
              <li>{`1 Master bedroom with en-suite bathroom, sea & sunset views, and access to a private balcony`}</li>
            </ul>
          </div>
        </div>
        <div className={styles.block}>
          <h3 className={styles.lowerFloor}>LOWER FLOOR</h3>
          <div className={styles.openPlanLivingContainer}>
            <ul className={styles.openPlanLivingDiningArea}>
              <li>
                2 Double bedrooms, sharing a bathroom and both have access to a
                garden area balcony
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className={styles.theVilla}>The Villa</h2>
      <h2 className={styles.pricesnight}>Prices/Night</h2>
      <h2 className={styles.availability}>Availability</h2>
      <div className={styles.block3}>
        <div className={styles.priceDetails}>
          <div className={styles.dates}>
            <span className={styles.span}>Dates</span>
            <span className={styles.span1}>{` `}</span>
          </div>
          <h3 className={styles.price}>PRICE</h3>
          <h3 className={styles.price}>Min.stay</h3>
        </div>
      </div>
      <div className={styles.row1}>
        <div className={styles.block4}>
          <div className={styles.priceDetails1}>
            <div className={styles.may0116JuneContainer}>
              <p className={styles.may}>01- 31 May</p>
              <p className={styles.may}>01-16 June</p>
              <p className={styles.may}>17-30 June</p>
              <p className={styles.may}>1-7 July</p>
              <p className={styles.may}>8 July -18 August</p>
              <p className={styles.may}>19-31 August</p>
              <p className={styles.may}>1-30 September</p>
              <p className={styles.may}>1-31 October</p>
            </div>
            <div className={styles.may0116JuneContainer}>
              <p className={styles.may}>12,000 €</p>
              <p className={styles.may}>15,000 €</p>
              <p className={styles.may}>18,000 €</p>
              <p className={styles.may}>25,000 €</p>
              <p className={styles.may}>27,000 €</p>
              <p className={styles.may}>22,000 €</p>
              <p className={styles.may}>15,000 €</p>
              <p className={styles.may}>12,000 €</p>
            </div>
            <div className={styles.nights5nights6nightsContainer}>
              <p className={styles.may}>5nights</p>
              <p className={styles.may}>5nights</p>
              <p className={styles.may}>6nights</p>
              <p className={styles.may}>6nights</p>
              <p className={styles.may}>7nights</p>
              <p className={styles.may}>6nights</p>
              <p className={styles.may}>6nights</p>
              <p className={styles.may}>5nights</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.priceSeparator}>
        <div className={styles.priceSeparatorChild} />
      </div>
      <div className={styles.descriptionTitleSeparator}>
        <div className={styles.priceSeparatorChild} />
      </div>
      <img
        className={styles.villaPricingChild}
        loading="lazy"
        alt=""
        src="/group-811@2x.png"
      />
    </section>
  );
};

export default VillaPricing;
