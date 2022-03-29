import React, { useState } from "react";
import "./AutoCompleteText.css";

type Props = {
  items: string[];
};

export const AutoCompleteText = (props: Props) => {
  const { items } = props;
  const [suggestionsArray, setSuggestionsArray] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

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

  const renderSuggestions = () => {
    if (suggestionsArray.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestionsArray.map((item) => (
          <li
            onClick={() => {
              suggestionSelected(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const handleFocus = () => {
    let suggestions: string[] = [];
    if (text.length > 0) {
      const regex = new RegExp(`^${text}`, "i");
      suggestions = items.sort().filter((item) => regex.test(item));
    }
    setSuggestionsArray(suggestions);
  };

  const suggestionSelected = (value: string) => {
    setText(value);
    setSuggestionsArray([]);
  };

  const handleBlur = () => {
    setSuggestionsArray([]);
  };

  return (
    <div className="AutoCompleteText">
      <input
        value={text}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={onTextChanged}
        type="text"
      />
      {renderSuggestions()}
    </div>
  );
};
