import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./villa-item.module.css";

export type VillaItemType = {
  className?: string;
  villaImage?: string;
  title?: string;
  title1?: string;
  capa1?: string;
  title2?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propLeft?: CSSProperties["left"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];

  /** Action props */
  onCardContainerClick?: () => void;
};

const VillaItem: NextPage<VillaItemType> = ({
  className = "",
  propBorder,
  onCardContainerClick,
  propFlex,
  propMinWidth,
  villaImage,
  propLeft,
  title,
  title1,
  capa1,
  title2,
  propDisplay,
  propMinWidth1,
}) => {
  const villaItemStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propBorder, propFlex, propMinWidth]);

  const heartIconsStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div
      className={[styles.villaItem, className].join(" ")}
      style={villaItemStyle}
      onClick={onCardContainerClick}
    >
      <img className={styles.villaImageIcon} alt="" src={villaImage} />
      <div className={styles.heartIcons} style={heartIconsStyle}>
        <img
          className={styles.vuesaxlinearheartIcon}
          loading="lazy"
          alt=""
          src="/vuesaxlinearheart.svg"
        />
      </div>
      <div className={styles.villaDetails}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.title1}>{title1}</div>
        <div className={styles.title2}>8 Bedrooms | 20 Guest | 2 Pools</div>
        <div className={styles.bottomDetails}>
          <div className={styles.hostDetails}>
            <img className={styles.capa1Icon} alt="" src={capa1} />
            <div className={styles.title3} style={titleStyle}>
              {title2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaItem;
