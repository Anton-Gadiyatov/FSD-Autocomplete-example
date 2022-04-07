import { AutoCompleteText } from "../../shared/ui/AutoComplete/AutoComplete";
import { AutoCompleteUseStateModel } from "./model";

export const AutoCompelteUseState = () => {
  const useAutocomplete = AutoCompleteUseStateModel();

  return (
    <AutoCompleteText
      text={useAutocomplete.text}
      suggestionsArray={useAutocomplete.suggestionsArray}
      handleBlur={useAutocomplete.handleBlur}
      stateHelper={useAutocomplete.stateHelper}
      onTextChanged={useAutocomplete.onTextChanged}
      handleFocus={useAutocomplete.handleFocus}
      suggestionSelected={useAutocomplete.suggestionSelected}
    />
  );
};
