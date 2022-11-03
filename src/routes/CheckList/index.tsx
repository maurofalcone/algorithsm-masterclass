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

const data: { label: string; value: CheckboxTypes }[] = [
  {
    label: "Express sign (sign all)",
    value: "all",
  },
  {
    label: "Loan Agreement",
    value: "loanAgreement",
  },
  {
    label: "Sign Consent",
    value: "signConsent",
  },
  {
    label: "Autopay Disclousure Statement",
    value: "autopayDisclousureStatement",
  },
  {
    label: "Vehicle Ownsership Verification",
    value: "vehicleOwnershipCertification",
  },
];

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
    const isAnyUnchecked = Object.values(rest || {}).some((value) => !value);
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
    <div>
      <div>
        <h1>Agreement</h1>
      </div>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <MyInput
              key={item.label}
              onChange={() => toggleCheck(item.value)}
              label={item.label}
              value={checkboxes[item.value]}
              type="checkbox"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Checklist;
