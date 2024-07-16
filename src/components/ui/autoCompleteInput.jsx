import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";
import 'primereact/resources/themes/saga-blue/theme.css';
import nasdaqData from '../../lib/nasdaq.json';
import "../../app/globals.css"
const items = nasdaqData;

export function AutoCompleteInput({inputValue, onChangeFunction}) {
  const [stockSuggestions, setStockSuggestions] = useState(items);
  const filterStocks = function (e) {
    let results = items.filter((item) => {
      return item.Name.toLowerCase().startsWith(e.query.toLowerCase());
    });
    setStockSuggestions(results);
  };
  return (
    <AutoComplete
      className="flex w-full h-10 border border-input px-3 py-2 text-sm"
      field="Name"
      dropdown="true"
      size="30"
      placeholder="Enter a Stock/Company name"
      value={inputValue}
      suggestions={stockSuggestions}
      completeMethod={filterStocks}
      onChange={(e) => onChangeFunction(e.value)}
      panelClassName="p-dropdown"
    />
  );
}
