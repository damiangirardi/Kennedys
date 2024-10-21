import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import VillaItem from "./villa-item";
import styles from "./picked-villas.module.css";

export type PickedVillasType = {
  className?: string;
};

const PickedVillas: NextPage<PickedVillasType> = ({ className = "" }) => {
  const router = useRouter();

  const onViewAllVillasClick = useCallback(() => {
    router.push("/kennedys-villas-list");
  }, [router]);

  return (
    <section className={[styles.pickedVillas, className].join(" ")}>
      <div className={styles.pickedHeader}>
        <h1 className={styles.pickedForYou}>Picked for you</h1>
        <div className={styles.viewAllVillas} onClick={onViewAllVillasClick}>
          View All Villas
        </div>
      </div>
      <div className={styles.villasGrid}>
        <div className={styles.vuesaxlineararchiveTick}>
          <img
            className={styles.vuesaxlineararchiveTickIcon}
            alt=""
            src="/vuesaxlineararchivetick.svg"
          />
        </div>
        <VillaItem
          villaImage="/villa-image@2x.png"
          title="Casa Gody"
          title1="Tulum"
          capa1="/capa-1-4@2x.png"
          title2="From € 12,000.00 / Night"
        />
        <VillaItem
          propBorder="1px solid #a3a3a3"
          propFlex="1"
          propMinWidth="308px"
          villaImage="/rectangle-39-12@2x.png"
          propLeft="340.3px"
          title="Narcisa"
          title1="Ibiza"
          capa1="/capa-1-11@2x.png"
          title2="From € 12,000.00 / Night"
          propDisplay="unset"
          propMinWidth1="unset"
        />
        <VillaItem
          propBorder="1px solid #a3a3a3"
          propFlex="1"
          propMinWidth="308px"
          villaImage="/rectangle-39-21@2x.png"
          propLeft="339.7px"
          title="Mimesis"
          title1="Greek Islands"
          capa1="/capa-1-2@2x.png"
          title2="From € 12,000.00 / Night"
          propDisplay="unset"
          propMinWidth1="unset"
        />
      </div>
    </section>
  );
};

export default PickedVillas;
