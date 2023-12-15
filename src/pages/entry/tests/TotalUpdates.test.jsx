import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from "../OrderEntry";

test("update scoop subtotal when scoop change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  // make sure total starts out at $0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", {
    exact: false,
  });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1, and check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2, and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");

  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update toppings subtotal when toppings change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="toppings" />);

  const toppingsSubtotals = screen.getByText("Toppings total: $", {
    exact: false,
  });

  const mnMsInput = await screen.findByRole("spinbutton", { name: "M&Ms" });

  await user.clear(mnMsInput);
  await user.type(mnMsInput, "1");
  expect(toppingsSubtotals).toHaveTextContent("1.5");

  const cherriesInput = await screen.findByRole("spinbutton", {
    name: "Cherries",
  });

  await user.clear(cherriesInput);
  await user.type(cherriesInput, "2");

  expect(toppingsSubtotals).toHaveTextContent("4.5");
});

describe("grand total", () => {
  test("grand total starts at $0.00", () => {
    render(<OrderEntry />);
    const grandTotalTitle = screen.getByRole("heading", {
      name: /grand total/i,
    });
    expect(grandTotalTitle).toHaveTextContent("0.00");
  });

  test("grand total updates properly if scoop is added first", async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotalTitle = screen.getByRole("heading", {
      name: /grand total/i,
    });
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, "1");

    expect(grandTotalTitle).toHaveTextContent("2.00");
  });

  test("grand total updates properly if topping is added first", async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotalTitle = screen.getByRole("heading", {
      name: /grand total/i,
    });
    const mnMsInput = await screen.findByRole("spinbutton", { name: "M&Ms" });

    await user.clear(mnMsInput);
    await user.type(mnMsInput, "2");

    expect(grandTotalTitle).toHaveTextContent("3.00");
  });

  test("grand total updates properly if item is removed", async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotalTitle = screen.getByRole("heading", {
      name: /grand total/i,
    });

    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, "3");

    const mnMsInput = await screen.findByRole("spinbutton", { name: "M&Ms" });

    await user.clear(mnMsInput);
    await user.type(mnMsInput, "2");

    expect(grandTotalTitle).toHaveTextContent("9.00");

    await user.type(mnMsInput, "0");

    expect(grandTotalTitle).toHaveTextContent("6.00");
  });
});
