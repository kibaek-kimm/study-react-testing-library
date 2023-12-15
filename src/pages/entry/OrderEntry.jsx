import { useOrderDetails } from "../../contexts/OrderDetail";
import { formatCurrency } from "../../utilities";
import Options from "./Options";

export default function OrderEntry() {
  const { totals } = useOrderDetails();
  const totalAmount = (totals["scoops"] ?? 0) + (totals["toppings"] ?? 0);

  return (
    <div style={{ padding: "60px 0" }}>
      <Options optionType="scoops" />
      <div style={{ height: "100px" }} />
      <Options optionType="toppings" />
      <div style={{ height: "60px" }} />
      <h2>Grand Total {formatCurrency(totalAmount)}</h2>
      <button>Order sundoe!</button>
    </div>
  );
}
