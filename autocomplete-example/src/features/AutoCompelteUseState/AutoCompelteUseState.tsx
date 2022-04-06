import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../api/apiCountries";
import { AutoCompleteText } from "../../AutoComplete/AutoCompleteText";

type Countries = string[];

export const AutoCompelteUseState = () => {
  const [items, setItems] = useState<Countries>([]);
  const [suggestionsArray, setSuggestionsArray] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const getCountriesHelper = async () => {
      const data = await getAllCountries().then((data) => data);
      setItems(data);
    };
    getCountriesHelper();
  });

  const stateHelper = (array: string[]) => {
    setSuggestionsArray(array);
  };

  const onTextChanged = (e: any) => {
    const value = e.target.value;
    let suggestions: string[] = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((item) => regex.test(item));
    }
    setSuggestionsArray(suggestions);
    setText(e.target.value);
  };

  const handleFocus = () => {
    let suggestions: string[] = [];
    if (text.length > 0) {
      const regex = new RegExp(`^${text}`, "i");
      suggestions = items.sort().filter((item) => regex.test(item));
    }
    setSuggestionsArray(suggestions);
  };

  const suggestionSelected = (item: string) => {
    setText(item);
    setSuggestionsArray([]);
  };

  const handleBlur = () => {
    setSuggestionsArray([]);
  };

  return (
    <AutoCompleteText
      text={text}
      suggestionsArray={suggestionsArray}
      handleBlur={handleBlur}
      stateHelper={stateHelper}
      onTextChanged={onTextChanged}
      handleFocus={handleFocus}
      suggestionSelected={suggestionSelected}
    />
  );
};
