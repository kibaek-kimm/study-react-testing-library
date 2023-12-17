import React from "react";
import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetail";
import { formatCurrency } from "../../utilities";
import { pricePerItem } from "../../constants";

export default function OrderSummary() {
  const { totals, optionCounts } = useOrderDetails();
  const scoopsArray = Object.entries(optionCounts.scoops);
  const scoopsList = scoopsArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));
  const toppingsArray = Object.entries(optionCounts.toppings);
  const toppingsList = toppingsArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  return (
    <div>
      <h1>Ordersummary</h1>
      <h2>Scoops: {formatCurrency(totals["scoops"])}</h2>
      <ul>{scoopsList}</ul>
      <h2>Toppings: {formatCurrency(totals["toppings"])}</h2>
      <ul>{toppingsList}</ul>
      <SummaryForm />
    </div>
  );
}
