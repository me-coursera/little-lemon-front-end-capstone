import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { MemoryRouter } from "react-router-dom";

// Mock api.js (fetchAPI unused here but kept for consistency)
jest.mock("../api.js", () => ({
    fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00"]),
    submitAPI: jest.fn(() => true),
}));

// Mock alertContext
jest.mock("../context/alertContext", () => ({
    useAlertContext: () => ({ onOpen: jest.fn() }),
}));

// Mock useSubmit hook if used by your form
jest.mock("../hooks/useSubmit", () => () => ({
    isLoading: false,
    response: null,
    submit: jest.fn(),
}));

const mockAvailableTimes = ["17:00", "18:00"];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

// Spy on localStorage APIs
beforeAll(() => {
    jest.spyOn(Storage.prototype, "getItem");
    jest.spyOn(Storage.prototype, "setItem");
});

beforeEach(() => {
    // Reset spies
    Storage.prototype.getItem.mockReset();
    Storage.prototype.setItem.mockReset();
    // Default getItem returns empty bookings array
    Storage.prototype.getItem.mockImplementation(() => JSON.stringify([]));
});

test("renders the BookingForm heading", async () => {
    render(
        <MemoryRouter>
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        </MemoryRouter>
    );
    const heading = await screen.findByText("Reserve a Table");
    expect(heading).toBeInTheDocument();
});

test("submits form with valid data", async () => {
    render(
        <MemoryRouter>
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Your full name"), {
        target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Your email address"), {
        target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Select reservation date"), {
        target: { value: "2025-09-30" },
    });
    fireEvent.change(screen.getByLabelText("Select reservation time"), {
        target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
        target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText("Select occasion type"), {
        target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
        expect(mockSubmitForm).toHaveBeenCalledTimes(1);
        expect(mockSubmitForm).toHaveBeenCalledWith({
            firstName: "John Doe",
            email: "john@example.com",
            date: "2025-09-30",
            time: "17:00",
            guests: 2, // <-- now expecting a number
            occasion: "Birthday",
        });
    });
});

test("writes booking to localStorage on submit", async () => {
    render(
        <MemoryRouter>
            <BookingForm
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Your full name"), {
        target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText("Your email address"), {
        target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Select reservation date"), {
        target: { value: "2025-10-01" },
    });
    fireEvent.change(screen.getByLabelText("Select reservation time"), {
        target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
        target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Select occasion type"), {
        target: { value: "Anniversary" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
        expect(Storage.prototype.setItem).toHaveBeenCalledWith(
            "little-lemon-bookings",
            expect.stringContaining('"date":"2025-10-01"')
        );
    });
});

describe("BookingForm HTML5 & ARIA attributes", () => {
    test("Name input has type, aria-label, and aria-required", () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );
        const input = screen.getByLabelText("Your full name");
        expect(input).toHaveAttribute("type", "text");
        expect(input).toHaveAttribute("aria-label", "Your full name");
        expect(input).toHaveAttribute("aria-required", "true");
    });

    test("Email input has type=email and aria-required", () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );
        const input = screen.getByLabelText("Your email address");
        expect(input).toHaveAttribute("type", "email");
        expect(input).toHaveAttribute("aria-required", "true");
    });

    test("Date input has type=date and aria-required", () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );
        const input = screen.getByLabelText("Select reservation date");
        expect(input).toHaveAttribute("type", "date");
        expect(input).toHaveAttribute("aria-required", "true");
    });

    test("Time select has aria-label and aria-required", () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );
        const select = screen.getByLabelText("Select reservation time");
        expect(select.tagName).toBe("SELECT");
        expect(select).toHaveAttribute("aria-required", "true");
    });

    test("Guests input has type=number, min, max, and aria-required", () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );
        const input = screen.getByLabelText("Number of guests");
        expect(input).toHaveAttribute("type", "number");
        expect(input).toHaveAttribute("min", "1");
        expect(input).toHaveAttribute("max", "10");
        expect(input).toHaveAttribute("aria-required", "true");
    });

    test("Occasion select has aria-label and aria-required", () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );
        const select = screen.getByLabelText("Select occasion type");
        expect(select.tagName).toBe("SELECT");
        expect(select).toHaveAttribute("aria-required", "true");
    });
});

describe("BookingForm validation behavior", () => {
    test("shows all required-field errors when fields are blurred empty", async () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );

        const nameInput = screen.getByLabelText("Your full name");
        const emailInput = screen.getByLabelText("Your email address");
        const dateInput = screen.getByLabelText("Select reservation date");
        const timeSelect = screen.getByLabelText("Select reservation time");
        const guestsInput = screen.getByLabelText("Number of guests");
        const occasionSelect = screen.getByLabelText("Select occasion type");

        // Clear guests to trigger the “required” error
        fireEvent.change(guestsInput, { target: { value: "" } });

        // Blur every field to mark it as touched
        fireEvent.blur(nameInput);
        fireEvent.blur(emailInput);
        fireEvent.blur(dateInput);
        fireEvent.blur(timeSelect);
        fireEvent.blur(guestsInput);
        fireEvent.blur(occasionSelect);

        await waitFor(() => {
            expect(screen.getByText("Name is required")).toBeInTheDocument();
            expect(screen.getByText("Email is required")).toBeInTheDocument();
            expect(screen.getByText("Date is required")).toBeInTheDocument();
            expect(screen.getByText("Time is required")).toBeInTheDocument();
            expect(
                screen.getByText("Number of guests is required")
            ).toBeInTheDocument();
            expect(
                screen.getByText("Occasion is required")
            ).toBeInTheDocument();
        });
    });

    test("shows invalid email error", async () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );

        const emailInput = screen.getByLabelText("Your email address");
        fireEvent.change(emailInput, { target: { value: "not-an-email" } });
        fireEvent.blur(emailInput);

        await waitFor(() => {
            expect(screen.getByText("Invalid email")).toBeInTheDocument();
        });
    });

    test("shows guest count boundary errors", async () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );

        const guestsInput = screen.getByLabelText("Number of guests");

        fireEvent.change(guestsInput, { target: { value: "0" } });
        fireEvent.blur(guestsInput);

        await waitFor(() => {
            expect(screen.getByText("At least 1 guest")).toBeInTheDocument();
        });

        fireEvent.change(guestsInput, { target: { value: "11" } });
        fireEvent.blur(guestsInput);

        await waitFor(() => {
            expect(screen.getByText("Maximum 10 guests")).toBeInTheDocument();
        });
    });

    test("no validation errors when form is filled correctly", async () => {
        render(
            <MemoryRouter>
                <BookingForm
                    availableTimes={mockAvailableTimes}
                    dispatch={mockDispatch}
                    submitForm={mockSubmitForm}
                />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText("Your full name"), {
            target: { value: "John Doe" },
        });
        fireEvent.change(screen.getByLabelText("Your email address"), {
            target: { value: "john@example.com" },
        });
        fireEvent.change(screen.getByLabelText("Select reservation date"), {
            target: { value: "2025-09-30" },
        });
        fireEvent.change(screen.getByLabelText("Select reservation time"), {
            target: { value: mockAvailableTimes[0] },
        });
        fireEvent.change(screen.getByLabelText("Number of guests"), {
            target: { value: "2" },
        });
        fireEvent.change(screen.getByLabelText("Select occasion type"), {
            target: { value: "Birthday" },
        });

        fireEvent.click(screen.getByRole("button", { name: /submit/i }));

        await waitFor(() => {
            expect(screen.queryByText(/is required/)).toBeNull();
            expect(screen.queryByText("Invalid email")).toBeNull();
            expect(screen.queryByText("At least 1 guest")).toBeNull();
            expect(screen.queryByText("Maximum 10 guests")).toBeNull();
        });
    });
});
