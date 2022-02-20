import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { countries } from "../../shared/api/countries/countries";
import { ListItems } from "../../shared/ui/ListItems/ListItems";
import { TextInput } from "../../shared/ui/TextInput/TextInput";

import styles from "./styles/index.module.css";

export const MainPage = () => {
  const [autocompleteInput, setAutocompleteInput] = useState("");
  const [suggestions, setSuggestions] = useState([] as string[]);
  let data = countries;

  useEffect(() => {
    if (autocompleteInput.length > 0) {
      const regex = new RegExp(`^${autocompleteInput}`, "i");
      const filteredSuggestions = data.sort().filter((country: string) => {
        return regex.test(country);
      });
      setSuggestions(filteredSuggestions);
      if (
        filteredSuggestions.length === 1 &&
        filteredSuggestions[0] === autocompleteInput
      ) {
        setSuggestions([] as string[]);
      }
    }

    if (autocompleteInput.length === 0) {
      setSuggestions([] as string[]);
    }
  }, [autocompleteInput]);

  const handleInputChange = (e: string) => {
    setAutocompleteInput(e);
  };

  const handleSuggestionClick = (e: string) => {
    setAutocompleteInput(e);
    setSuggestions([] as string[]);
  };

  return (
    <div className={styles.autocomplete}>
      <TextInput
        inputValue={autocompleteInput}
        handleInputChange={handleInputChange}
      />
      <ListItems
        data={suggestions}
        handleSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
};
