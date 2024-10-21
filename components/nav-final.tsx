import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import Loginsignup from "./loginsignup";
import PortalPopup from "./portal-popup";
import IconPhone from "./icon-phone";
import { useRouter } from "next/router";
import NavvuesaxlinearProperty38Icon from "./navvuesaxlinear-property38-icon";
import NavvuesaxlinearProperty37Icon from "./navvuesaxlinear-property37-icon";
import styles from "./nav-final.module.css";

export type NavFinalType = {
  className?: string;
  showImage?: boolean;
  vuesaxlinearsms?: string;
  capa1?: string;
  image?: string;
  iconPhone?: string;
  navvuesaxlinearProperty39?: string;
  navvuesaxlinearProperty38?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const NavFinal: NextPage<NavFinalType> = ({
  className = "",
  showImage = false,
  propLeft,
  vuesaxlinearsms,
  propWidth,
  propWidth1,
  capa1,
  image,
  iconPhone,
  navvuesaxlinearProperty39,
  navvuesaxlinearProperty38,
}) => {
  const [isLoginsignupOpen, setLoginsignupOpen] = useState(false);
  const navFinalStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const vacationRentalsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const conciergeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const router = useRouter();

  const openLoginsignup = useCallback(() => {
    setLoginsignupOpen(true);
  }, []);

  const closeLoginsignup = useCallback(() => {
    setLoginsignupOpen(false);
  }, []);

  const onVacationRentalsTextClick = useCallback(() => {
    router.push("/kennedys-villas");
  }, [router]);

  const onConciergeTextClick = useCallback(() => {
    router.push("/kennedys-concierge");
  }, [router]);

  const onEventsTextClick = useCallback(() => {
    router.push("/kennedys-events");
  }, [router]);

  const onRealEstateTextClick = useCallback(() => {
    router.push("/real-estate");
  }, [router]);

  const onWeManageYourClick = useCallback(() => {
    router.push("/we-manage");
  }, [router]);

  return (
    <>
      <header
        className={[styles.navFinal, className].join(" ")}
        style={navFinalStyle}
      >
        <div className={styles.topMenu}>
          <div className={styles.button}>
            <IconPhone iconPhone={iconPhone} />
            <a
              className={styles.contactButtonLabels}
              href="tel:+302108947139"
              target="_blank"
            >
              +30 21089 47139
            </a>
          </div>
          <div className={styles.button1}>
            <img
              className={styles.vuesaxlinearsmsIcon}
              alt=""
              src={vuesaxlinearsms}
            />
            <div className={styles.contact}>Contact</div>
          </div>
        </div>
        <div className={styles.topNav}>
          <nav className={styles.servicesDropdown}>
            <div
              className={styles.vacationRentals}
              onClick={onVacationRentalsTextClick}
              style={vacationRentalsStyle}
            >
              Vacation Rentals
            </div>
            <div
              className={styles.concierge}
              onClick={onConciergeTextClick}
              style={conciergeStyle}
            >
              Concierge
            </div>
            <div className={styles.events} onClick={onEventsTextClick}>
              Events
            </div>
            <div className={styles.realEstate} onClick={onRealEstateTextClick}>
              Real Estate
            </div>
          </nav>
          <img className={styles.capa1Icon} loading="lazy" alt="" src={capa1} />
          <div className={styles.right}>
            <div className={styles.weManageYour} onClick={onWeManageYourClick}>
              We Manage Your Villas
            </div>
            <button className={styles.logIn} onClick={openLoginsignup}>
              <div className={styles.logIn1}>Log In</div>
            </button>
            {showImage && (
              <div className={styles.image}>
                <img className={styles.imageIcon} alt="" src={image} />
                <NavvuesaxlinearProperty38Icon
                  navvuesaxlinearProperty39={navvuesaxlinearProperty39}
                />
              </div>
            )}
            <NavvuesaxlinearProperty37Icon
              navvuesaxlinearProperty38={navvuesaxlinearProperty38}
            />
          </div>
        </div>
      </header>
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

export default NavFinal;
