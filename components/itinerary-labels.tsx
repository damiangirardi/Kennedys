import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./itinerary-labels.module.css";

export type ItineraryLabelsType = {
  className?: string;
  group50?: string;
  group54?: string;
  group49?: string;
  group55?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];

  /** Action props */
  onServiceListContainerClick?: () => void;
  onGroupContainerClick?: () => void;
};

const ItineraryLabels: NextPage<ItineraryLabelsType> = ({
  className = "",
  onServiceListContainerClick,
  group50,
  group54,
  group49,
  group55,
  onGroupContainerClick,
  propWidth,
}) => {
  const yatchRentalStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const router = useRouter();

  const onGroupImageClick = useCallback(() => {
    router.push("/kennedys-concierge-in-mykonos");
  }, [router]);

  return (
    <div
      className={[styles.itineraryLabels, className].join(" ")}
      onClick={onServiceListContainerClick}
    >
      <img
        className={styles.itineraryLabelsChild}
        loading="lazy"
        alt=""
        src={group50}
        onClick={onGroupContainerClick}
      />
      <img
        className={styles.itineraryLabelsItem}
        loading="lazy"
        alt=""
        src={group54}
        onClick={onGroupContainerClick}
      />
      <img
        className={styles.itineraryLabelsInner}
        alt=""
        src={group49}
        onClick={onGroupContainerClick}
      />
      <img
        className={styles.groupIcon}
        loading="lazy"
        alt=""
        src={group55}
        onClick={onGroupContainerClick}
      />
      <div
        className={styles.personalizedItineraries}
      >{`Personalized itineraries `}</div>
      <div className={styles.helicopter}>Helicopter</div>
      <div className={styles.jetRental}>Jet Rental</div>
      <div className={styles.yatchRental} style={yatchRentalStyle}>
        <p className={styles.yatch}>Yatch</p>
        <p className={styles.yatch}>Rental</p>
      </div>
    </div>
  );
};

export default ItineraryLabels;
