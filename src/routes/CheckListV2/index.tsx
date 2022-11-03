/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MyInput from "../../shared/MyInput";
import styles from "./CheckList.module.css";

type CheckboxTypes =
  | "all"
  | "loanAgreement"
  | "signConsent"
  | "autopayDisclousureStatement"
  | "vehicleOwnershipCertification";

const allCheckedState: Record<CheckboxTypes, boolean> = {
  all: true,
  loanAgreement: true,
  signConsent: true,
  autopayDisclousureStatement: true,
  vehicleOwnershipCertification: true,
};

const allUncheckedState: Record<CheckboxTypes, boolean> = {
  all: false,
  loanAgreement: false,
  signConsent: false,
  autopayDisclousureStatement: false,
  vehicleOwnershipCertification: false,
};

const Checklist = () => {
  const [checkboxes, setCheckboxes] =
    useState<Record<CheckboxTypes, boolean>>(allUncheckedState);

  const toggleCheck = (params: CheckboxTypes) => {
    if (params === "all") {
      return setCheckboxes((prevState) => {
        return !!prevState.all ? allUncheckedState : allCheckedState;
      });
    }
    return setCheckboxes((prevState) => ({
      ...prevState,
      [params]: !prevState[params],
    }));
  };

  useEffect(() => {
    const { all, ...rest } = checkboxes;
    const isAnyUnchecked = Object.values(rest).some((value) => !value);
    if (isAnyUnchecked) {
      setCheckboxes((prevState) => ({ ...prevState, all: false }));
    } else {
      setCheckboxes((prevState) => ({ ...prevState, all: true }));
    }
  }, [
    checkboxes.all,
    checkboxes.autopayDisclousureStatement,
    checkboxes.loanAgreement,
    checkboxes.signConsent,
    checkboxes.vehicleOwnershipCertification,
  ]);

  return (
    <div className={styles.container}>
      <MyInput
        onChange={() => toggleCheck("all")}
        label="Express sign (sign all)"
        value={checkboxes.all}
        type="checkbox"
      />
      <MyInput
        onChange={() => toggleCheck("loanAgreement")}
        label="Loan Agreement"
        value={checkboxes.loanAgreement}
        type="checkbox"
      />
      <MyInput
        onChange={() => toggleCheck("signConsent")}
        label="Sign Consent"
        value={checkboxes.signConsent}
        type="checkbox"
      />
      <MyInput
        onChange={() => toggleCheck("autopayDisclousureStatement")}
        label="Autopay Disclousure Statement"
        value={checkboxes.autopayDisclousureStatement}
        type="checkbox"
      />
      <MyInput
        onChange={() => toggleCheck("vehicleOwnershipCertification")}
        label="Vehicle Ownsership Verification"
        value={checkboxes.vehicleOwnershipCertification}
        type="checkbox"
      />
    </div>
  );
};

export default Checklist;
