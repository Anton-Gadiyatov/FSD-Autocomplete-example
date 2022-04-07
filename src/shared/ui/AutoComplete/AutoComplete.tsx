import { click } from "@testing-library/user-event/dist/click";
import "./AutoComplete.css";

type Props = {
  text: string;
  suggestionsArray: string[];
  handleBlur(): void;
  onTextChanged(e: any): void;
  stateHelper(array: string[]): void;
  handleFocus(): void;
  suggestionSelected(item: string): void;
};

export const AutoCompleteText = (props: Props) => {
  const {
    text,
    suggestionsArray,
    handleBlur,
    onTextChanged,
    handleFocus,
    suggestionSelected,
  } = props;

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

  return (
    <div className="AutoCompleteText" onBlur={handleBlur}>
      <input
        value={text}
        onChange={onTextChanged}
        // onBlur={handleBlur}
        onFocus={handleFocus}
        type="text"
      />
      {renderSuggestions()}
    </div>
  );
};
