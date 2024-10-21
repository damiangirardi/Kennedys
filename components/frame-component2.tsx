import type { NextPage } from "next";
import { useCallback } from "react";
import VillaItem from "./villa-item";
import { useRouter } from "next/router";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonsClick = useCallback(() => {
    router.push("/kennedys-villas-list");
  }, [router]);

  return (
    <section className={[styles.mykonosVillasParent, className].join(" ")}>
      <h1 className={styles.mykonosVillas}>mykonos villas</h1>
      <div className={styles.villas}>300 Villas</div>
      <div className={styles.vuesaxlineararchiveTickParent}>
        <div className={styles.vuesaxlineararchiveTick}>
          <img
            className={styles.vuesaxlineararchiveTickIcon}
            alt=""
            src="/vuesaxlineararchivetick.svg"
          />
        </div>
        <VillaItem
          propBorder="unset"
          propFlex="1"
          propMinWidth="308px"
          villaImage="/villa-image@2x.png"
          propLeft="340px"
          title="Casa Gody"
          title1="Mykonos"
          capa1="/capa-1-4@2x.png"
          title2="From € 12,000.00 / Night"
          propDisplay="unset"
          propMinWidth1="unset"
        />
        <VillaItem
          propBorder="unset"
          propFlex="1"
          propMinWidth="308px"
          villaImage="/rectangle-39-12@2x.png"
          propLeft="340.3px"
          title="Narcisa"
          title1="Mykonos"
          capa1="/capa-1-11@2x.png"
          title2="From € 12,000.00 / Night"
          propDisplay="unset"
          propMinWidth1="unset"
        />
        <VillaItem
          propBorder="unset"
          propFlex="1"
          propMinWidth="308px"
          villaImage="/rectangle-39-21@2x.png"
          propLeft="339.7px"
          title="Mimesis"
          title1="Mykonos"
          capa1="/capa-1-2@2x.png"
          title2="From € 12,000.00 / Night"
          propDisplay="unset"
          propMinWidth1="unset"
        />
      </div>
      <button className={styles.buttons} onClick={onButtonsClick}>
        <div className={styles.label}>View All Villas in Mykonos</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </button>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/group-81@2x.png"
      />
    </section>
  );
};

export default FrameComponent2;
