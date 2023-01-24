import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("Checking checkbox enables button", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
  test("Unchecking checkbox again disables button", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });

    await user.click(checkbox);
    await user.click(checkbox);

    expect(button).toBeDisabled();
  });
});
