import type { NextPage } from "next";
import { useCallback } from "react";
import InputElements from "./input-elements";
import FrameComponent from "./frame-component";
import IconUpDown from "./icon-up-down";
import BedroomsAndBudget from "./bedrooms-and-budget";
import { useRouter } from "next/router";
import Vuesaxlinearcandle2Icon from "./vuesaxlinearcandle2-icon";
import CallToAction from "./call-to-action";
import styles from "./form-container.module.css";

export type FormContainerType = {
  className?: string;
};

const FormContainer: NextPage<FormContainerType> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonsClick = useCallback(() => {
    router.push("/kennedys-villas-list1");
  }, [router]);

  return (
    <div className={[styles.formContainer, className].join(" ")}>
      <div className={styles.rentalSearchBackground}>
        <h1 className={styles.luxuryVacationRentals}>
          Luxury Vacation Rentals
        </h1>
      </div>
      <div className={styles.searchFilters}>
        <div className={styles.filterElements}>
          <form className={styles.locationFilter}>
            <InputElements
              vuesaxlinearlocation="pending_969:5316"
              propWidth="24px"
              propHeight="24px"
            />
            <FrameComponent
              propFlex="unset"
              propWidth="212px"
              propAlignSelf="unset"
              checkIn="Check In / Check Out"
              trailingIcon2="/trailing-icon-1.svg"
              trailingIcon3
              showTrailingIcon={false}
            />
            <div className={styles.bedroomsAndBudget}>
              <div className={styles.label}>
                <div className={styles.bedrooms}>Bedrooms</div>
              </div>
              <div className={styles.fieldText}>
                <div className={styles.container}>
                  <div className={styles.bedroomInput}>1</div>
                  <IconUpDown trailingIcon="/trailing-icon-2.svg" />
                </div>
              </div>
            </div>
            <BedroomsAndBudget
              budget="Budget"
              trailingIcon="/trailing-icon-2.svg"
            />
            <button className={styles.buttons} onClick={onButtonsClick}>
              <div className={styles.label1}> Filters</div>
              <Vuesaxlinearcandle2Icon vuesaxlinearcandle2="/vuesaxlinearcandle2.svg" />
            </button>
          </form>
          <div className={styles.fieldText1}>
            <img
              className={styles.leadingIcon}
              alt=""
              src="/leading-icon1.svg"
            />
            <img
              className={styles.vuesaxlinearsmsIcon}
              alt=""
              src="/vuesaxlinearsms.svg"
            />
            <div className={styles.container1}>
              <div className={styles.email}>Email</div>
              <div className={styles.chips}>
                <div className={styles.chip}>
                  <img
                    className={styles.leadingIcon1}
                    alt=""
                    src="/leadingicon.svg"
                  />
                  <div className={styles.label2}>{`Chip `}</div>
                  <b className={styles.number}>213</b>
                  <img
                    className={styles.trailingIcon}
                    alt=""
                    src="/trailingicon.svg"
                  />
                </div>
                <div className={styles.chip}>
                  <img
                    className={styles.leadingIcon1}
                    alt=""
                    src="/leadingicon.svg"
                  />
                  <div className={styles.label2}>Chip</div>
                  <b className={styles.number}>213</b>
                  <img
                    className={styles.trailingIcon}
                    alt=""
                    src="/trailingicon.svg"
                  />
                </div>
                <div className={styles.div}>+2</div>
              </div>
            </div>
            <img
              className={styles.leadingIcon}
              alt=""
              src="/trailing-icon2.svg"
            />
          </div>
        </div>
        <CallToAction />
      </div>
    </div>
  );
};

export default FormContainer;
