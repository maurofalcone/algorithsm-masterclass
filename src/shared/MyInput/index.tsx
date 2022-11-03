import { HTMLInputTypeAttribute } from "react";
import styles from "./MyInput.module.css";

interface Props {
  classNames?: string;
  label: string;
  value: boolean | string;
  type: HTMLInputTypeAttribute | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const MyInput = ({ classNames, label, onChange, type, value }: Props) => {
  return (
    <div className={`${styles.container} ${classNames}`}>
      {type === "checkbox" ? (
        <input
          className={styles.checkbox}
          type={type}
          checked={value as boolean}
          onChange={onChange}
        />
      ) : (
        <input
          className={styles.input}
          type={type}
          onChange={onChange}
          value={value as string}
        />
      )}
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default MyInput;
