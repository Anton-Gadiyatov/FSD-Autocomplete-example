import React from "react";
import styles from "./TextInput.module.css";

type Props = {
  inputValue: string;
  handleInputChange(e: string): void;
};

export const TextInput = (props: Props) => {
  const { inputValue, handleInputChange } = props;
  return (
    <input
      className={styles.input}
      type="text"
      value={inputValue}
      onChange={(e) => {
        handleInputChange(e.target.value);
      }}
    />
  );
};
