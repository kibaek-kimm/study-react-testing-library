import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("SummaryForm component", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: "terms" });
    expect(checkbox).not.toBeChecked();
  });

  test("Button is disabled by default", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: "btn-submit" });
    expect(button).toBeDisabled();
  });

  test("Checking checkbox enables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: "terms" });
    const button = screen.getByRole("button", { name: "btn-submit" });
    fireEvent.click(checkbox);

    expect(button).toBeEnabled();
  });
  test("Unchecking checkbox again disables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", { name: "terms" });
    const button = screen.getByRole("button", { name: "btn-submit" });

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(button).toBeDisabled();
  });
});
