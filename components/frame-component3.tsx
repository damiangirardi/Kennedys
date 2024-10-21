import type { NextPage } from "next";
import { useCallback } from "react";
import VillaItem from "./villa-item";
import { useRouter } from "next/router";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonsClick = useCallback(() => {
    router.push("/kennedys-villas-list");
  }, [router]);

  return (
    <section className={[styles.ibizaVillasParent, className].join(" ")}>
      <h1 className={styles.ibizaVillas}>ibiza villas</h1>
      <div className={styles.villas}>100 Villas</div>
      <div className={styles.vuesaxlineararchiveTickParent}>
        <div className={styles.vuesaxlineararchiveTick}>
          <img
            className={styles.vuesaxlineararchiveTickIcon}
            alt=""
            src="/vuesaxlineararchivetick.svg"
          />
        </div>
        <VillaItem
          propBorder="1px solid #a3a3a3"
          propFlex="1"
          propMinWidth="308px"
          villaImage="/rectangle-39-6@2x.png"
          propLeft="340px"
          title="Antonella"
          title1="Ibiza"
          capa1="/capa-1-4@2x.png"
          title2="From € 12,000.00 / Night"
          propDisplay="unset"
          propMinWidth1="unset"
        />
        <VillaItem
          propBorder="1px solid #a3a3a3"
          propFlex="1"
          propMinWidth="308px"
          villaImage="/image-22@2x.png"
          propLeft="340.3px"
          title="Mia"
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
          villaImage="/image-31@2x.png"
          propLeft="339.7px"
          title="Samantha"
          title1="Ibiza"
          capa1="/capa-1-2@2x.png"
          title2="From € 12,000.00 / Night"
          propDisplay="unset"
          propMinWidth1="unset"
        />
      </div>
      <button className={styles.buttons} onClick={onButtonsClick}>
        <div className={styles.label}>View All Villas in Ibiza</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </button>
    </section>
  );
};

export default FrameComponent3;
