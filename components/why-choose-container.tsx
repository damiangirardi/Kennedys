import type { NextPage } from "next";
import styles from "./why-choose-container.module.css";

export type WhyChooseContainerType = {
  className?: string;
};

const WhyChooseContainer: NextPage<WhyChooseContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.whyChooseContainer, className].join(" ")}>
      <div className={styles.whyChooseOurServicesParent}>
        <h1 className={styles.whyChooseOur}>Why choose our services</h1>
        <div className={styles.ourConciergeServices}>
          Our concierge services offer unparalleled luxury and personalized
          attention. From bespoke itineraries and 24/7 support to exclusive
          access and seamless coordination, we ensure every detail is expertly
          managed to provide you with a truly exceptional experience.
        </div>
      </div>
      <div className={styles.benefitCards}>
        <div className={styles.cardContainers}>
          <img
            className={styles.cardContainersChild}
            alt=""
            src="/group-1073@2x.png"
          />
          <div className={styles.persoinalizedService}>
            Persoinalized Service
          </div>
          <div className={styles.tailoredExperiencesTo}>
            Tailored experiences to meet your unique needs and preferences.
          </div>
        </div>
        <div className={styles.cardContainers1}>
          <img
            className={styles.cardContainersItem}
            loading="lazy"
            alt=""
            src="/group-1051@2x.png"
          />
          <div className={styles.availability}>24/7 Availability</div>
          <div className={styles.dedicatedConciergeSupport}>
            Dedicated concierge support available around the clock, both
            remotely and on-site.
          </div>
        </div>
        <div className={styles.exclusiveAccessCard}>
          <img
            className={styles.exclusiveAccessCardChild}
            alt=""
            src="/group-1063@2x.png"
          />
          <div className={styles.accessDescription}>
            <div className={styles.exclusiveAccess}>EXCLUSIVE ACCESS</div>
            <div className={styles.dedicatedConciergeSupport}>
              VIP entry, prime seating, and seamless arrangements at top venues
              and events.
            </div>
          </div>
        </div>
        <div className={styles.cardContainers2}>
          <img
            className={styles.cardContainersInner}
            loading="lazy"
            alt=""
            src="/group-1081@2x.png"
          />
          <div className={styles.effortlessCoordination}>
            EFFORTLESS COORDINATION
          </div>
          <div className={styles.tailoredExperiencesTo}>
            From transportation to last-minute requests, we handle every detail
            for a smooth, stress-free experience.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseContainer;
