import React from "react";
import styles from "./ListItems.module.css";

type Props = {
  data: string[];
  handleSuggestionClick(e: string): void;
};

export const ListItems = (props: Props) => {
  const { data, handleSuggestionClick } = props;
  return (
    <ul
    className={styles.list}>
      {data.map((item: string) => (
        <li
          className={styles.item}
          key={item}
          onClick={() => {
            handleSuggestionClick(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
