import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

const OrderDetail = createContext();

// create custom hook to check whether we're in a provider
export function useOrderDetails() {
  const contextValue = useContext(OrderDetail);

  if (!contextValue) {
    throw new Error(
      "useOrderDetails muse be called from within an OrderDetailProvider"
    );
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // example: { Chocolate: 1, Vanilla: 2 }
    toppings: {}, // example: { Gummi Bears: 1 }
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    //  make a copy of existing state.
    const newOptionCounts = { ...optionCounts };

    // update the copy with the new information
    newOptionCounts[optionType][itemName] = newItemCount;

    // update the state with the upadted copy
    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} });
  }

  // utility function to derive totals form optionsCounts state value
  function calculateTotal(optionType) {
    // get an array of counts for the option tyupe (for example [1,2])
    const countsArray = Object.values(optionCounts[optionType]);

    // total he values in the array of counts
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    // multiply the total number of items by the price for this item type
    return totalCount * pricePerItem[optionType];
  }
  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  };

  const value = { optionCounts, totals, updateItemCount, resetOrder };
  return <OrderDetail.Provider value={value} {...props}></OrderDetail.Provider>;
}
