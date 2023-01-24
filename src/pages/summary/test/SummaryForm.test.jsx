import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("SummaryForm component", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  test("Button is disabled by default", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: /confirm order/i });
    expect(button).toBeDisabled();
  });

  test("Checking checkbox enables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    fireEvent.click(checkbox);

    expect(button).toBeEnabled();
  });
  test("Unchecking checkbox again disables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(button).toBeDisabled();
  });
});
