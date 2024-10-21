import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import VuesaxlinearheartIcon1 from "./vuesaxlinearheart-icon1";
import PropertyCardOne from "./property-card-one";
import styles from "./real-estate1.module.css";

export type RealEstate1Type = {
  className?: string;
};

const RealEstate1: NextPage<RealEstate1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onLuxuryTitleDecorationClick = useCallback(() => {
    router.push("/kennedys-villas-list");
  }, [router]);

  return (
    <section className={[styles.realEstate, className].join(" ")}>
      <div className={styles.title}>
        <img
          className={styles.luxuryTitleDecoration}
          alt=""
          src="/luxury-title-decoration@2x.png"
          onClick={onLuxuryTitleDecorationClick}
        />
        <div className={styles.expertlyManagingYour}>
          Expertly Managing Your Villas for Premium Rentals
        </div>
        <div className={styles.luxuryTitle}>
          <h1 className={styles.luxuryRealEstate}>LUXURY REAL ESTATE</h1>
        </div>
      </div>
      <div className={styles.popularProperties}>
        <div className={styles.mostPopular}>Most Popular</div>
        <div className={styles.viewAllEvents}>View all events</div>
      </div>
      <div className={styles.villas}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-51-5@2x.png"
          />
          <div className={styles.rentalTitle}>
            <div className={styles.top}>
              <div className={styles.mykonos}>
                <p className={styles.p}>$ 23.000.000</p>
                <p className={styles.p}>Mykonos</p>
              </div>
            </div>
          </div>
          <div className={styles.propertyOneBedrooms}>
            <div className={styles.bedrooms}>8 Bedrooms</div>
            <div className={styles.bathrooms}>8 Bathrooms</div>
            <div className={styles.bathrooms}>1000 sq.m</div>
          </div>
          <div className={styles.propertyCardTwo}>
            <VuesaxlinearheartIcon1
              vuesaxlinearheart="/vuesaxlinearheart.svg"
              propHeight="18px"
              propWidth="18px"
            />
          </div>
        </div>
        <PropertyCardOne
          image="/image-5@2x.png"
          vuesaxlinearheart="/vuesaxlinearheart-6.svg"
          propHeight="18px"
          propWidth="18px"
        />
        <PropertyCardOne
          image="/image-6@2x.png"
          vuesaxlinearheart="/vuesaxlinearheart.svg"
          propHeight="18px"
          propWidth="18px"
        />
        <PropertyCardOne
          image="/image-7@2x.png"
          vuesaxlinearheart="/vuesaxlinearheart.svg"
          propHeight="18px"
          propWidth="18px"
        />
      </div>
    </section>
  );
};

export default RealEstate1;
