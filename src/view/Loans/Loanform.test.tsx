import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoanForm } from "@/components/LoanModal";

describe("LoanForm", () => {
  const mockSetOpen = jest.fn();

  beforeEach(() => {
    mockSetOpen.mockClear();
  });

  test("renders all form fields correctly", () => {
    render(<LoanForm setOpen={mockSetOpen} />);

    expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tenure/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/purpose/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit loan request/i })
    ).toBeInTheDocument();
  });

  test("displays validation errors when form is submitted empty", async () => {
    render(<LoanForm setOpen={mockSetOpen} />);

    fireEvent.click(
      screen.getByRole("button", { name: /submit loan request/i })
    );

    expect(await screen.findByText(/amount is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/tenure is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/purpose is required/i)).toBeInTheDocument();
  });

  test("submits the form successfully with valid input", async () => {
    render(<LoanForm setOpen={mockSetOpen} />);

    fireEvent.change(screen.getByLabelText(/amount/i), {
      target: { value: "1000" },
    });
    fireEvent.change(screen.getByLabelText(/tenure/i), {
      target: { value: "12" },
    });
    fireEvent.change(screen.getByLabelText(/purpose/i), {
      target: { value: "Business expansion" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /submit loan request/i })
    );

    await waitFor(() => {
      expect(mockSetOpen).toHaveBeenCalledWith(false);
    });

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  test("shows validation error for incorrect input types", async () => {
    render(<LoanForm setOpen={mockSetOpen} />);

    fireEvent.change(screen.getByLabelText(/amount/i), {
      target: { value: "invalid" },
    });
    fireEvent.change(screen.getByLabelText(/tenure/i), {
      target: { value: "-10" },
    });
    fireEvent.change(screen.getByLabelText(/purpose/i), {
      target: { value: "123" },
    });

    fireEvent.blur(screen.getByLabelText(/amount/i));
    fireEvent.blur(screen.getByLabelText(/tenure/i));
    fireEvent.blur(screen.getByLabelText(/purpose/i));

    expect(
      await screen.findByText(/amount must be a number/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/tenure must be positive/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/purpose must be at least 5 characters/i)
    ).toBeInTheDocument();
  });
});
