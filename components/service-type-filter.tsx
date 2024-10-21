import type { NextPage } from "next";
import Checkbox from "./checkbox";
import styles from "./service-type-filter.module.css";

export type ServiceTypeFilterType = {
  className?: string;
};

const ServiceTypeFilter: NextPage<ServiceTypeFilterType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.serviceTypeFilter, className].join(" ")}>
      <div className={styles.serviceType}>Service Type</div>
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Yacht Rental"
        propWidth1="93px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Personalized Itineraries"
        propWidth1="174px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Jet Charter"
        propWidth1="83px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Helicopter"
        propWidth1="79px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Chauffeur Service"
        propWidth1="135px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label={`Tours & Experiences`}
        propWidth1="152px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Security"
        propWidth1="62px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Kids Entertainment"
        propWidth1="143px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Plane Flights"
        propWidth1="95px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label={`Salon & Beauty`}
        propWidth1="113px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
      <Checkbox
        propWidth="unset"
        propHeight="unset"
        propAlignSelf="stretch"
        label="Unique Experiences"
        propWidth1="150px"
        propDisplay="flex"
        propAlignItems="center"
        propFlex="unset"
      />
    </div>
  );
};

export default ServiceTypeFilter;
