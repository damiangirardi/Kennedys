import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Contact from "./contact";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import Experience from "./experience";
import PersonalDance from "./personal-dance";
import MykonianTour from "./mykonian-tour";
import CatamaranCruise from "./catamaran-cruise";
import styles from "./experiences-title.module.css";

export type ExperiencesTitleType = {
  className?: string;
};

const ExperiencesTitle: NextPage<ExperiencesTitleType> = ({
  className = "",
}) => {
  const [isContactOpen, setContactOpen] = useState(false);
  const router = useRouter();

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  const onImageWrapperContainerClick = useCallback(() => {
    router.push("/kennedys-villa-detail");
  }, [router]);

  return (
    <>
      <section className={[styles.experiencesTitle, className].join(" ")}>
        <h1 className={styles.text}>Whats happening around</h1>
        <div className={styles.experiences}>
          <Experience
            onImageWrapperContainerClick={onImageWrapperContainerClick}
            image="/image-32@2x.png"
          />
          <PersonalDance
            personalDanceWrapper="/dance-lesson-icon@2x.png"
            onImageWrapperContainerClick={onImageWrapperContainerClick}
          />
          <MykonianTour
            mykonianTourContainer="/wine-tasting-details@2x.png"
            onImageWrapperContainerClick={onImageWrapperContainerClick}
          />
          <CatamaranCruise
            catamaranCruiseContainer="/catamaran-details@2x.png"
            onImageWrapperContainerClick={onImageWrapperContainerClick}
          />
          <button className={styles.buttons} onClick={openContact}>
            <div className={styles.label}>Contact Us</div>
            <img
              className={styles.experiencesButtonIcon}
              alt=""
              src="/vector.svg"
            />
          </button>
        </div>
      </section>
      {isContactOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeContact}
        >
          <Contact onClose={closeContact} />
        </PortalPopup>
      )}
    </>
  );
};

export default ExperiencesTitle;
