// src/Components/BookingForm.test.js

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

// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import BookingForm from "./BookingForm";
// import { MemoryRouter } from "react-router-dom";
// import { initializeTimes } from "../Pages/Reservations";

// // ✅ MOCKS ADDED: fetchAPI and submitAPI are mocked to return consistent results
// jest.mock("../api.js", () => ({
//     fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00"]),
//     submitAPI: jest.fn(() => true),
// }));

// // Step 1: Test for some static text being rendered in the BookingForm component
// jest.mock("../context/alertContext", () => ({
//     useAlertContext: () => ({
//         onOpen: jest.fn(),
//     }),
// }));

// // ✅ MOCK HOOK: useSubmit is mocked to avoid side effects
// jest.mock("../hooks/useSubmit", () => () => ({
//     isLoading: false,
//     response: null,
//     submit: jest.fn(),
// }));

// const mockAvailableTimes = ["17:00", "18:00"];
// const mockDispatch = jest.fn();
// const mockSubmitForm = jest.fn();

// test("renders the BookingForm heading", async () => {
//     render(
//         <MemoryRouter>
//             <BookingForm
//                 availableTimes={mockAvailableTimes}
//                 dispatch={mockDispatch}
//                 submitForm={mockSubmitForm}
//             />
//         </MemoryRouter>
//     );

//     const headingElement = await screen.findByText("Reserve a Table");
//     expect(headingElement).toBeInTheDocument();
// });

// ///////////////////////////////////////////////////////////////////////////////////

// // ✅ NEW TEST: simulate full form submission with valid data
// test("submits form with valid data", async () => {
//     render(
//         <MemoryRouter>
//             <BookingForm
//                 availableTimes={mockAvailableTimes}
//                 dispatch={mockDispatch}
//                 submitForm={mockSubmitForm}
//             />
//         </MemoryRouter>
//     );

//     fireEvent.change(screen.getByLabelText("Your full name"), {
//         target: { value: "John Doe" },
//     });
//     fireEvent.change(screen.getByLabelText("Your email address"), {
//         target: { value: "john@example.com" },
//     });
//     fireEvent.change(screen.getByLabelText("Select reservation date"), {
//         target: { value: "2025-09-30" },
//     });
//     fireEvent.change(screen.getByLabelText("Select reservation time"), {
//         target: { value: "17:00" },
//     });
//     fireEvent.change(screen.getByLabelText("Number of guests"), {
//         target: { value: "2" },
//     });
//     fireEvent.change(screen.getByLabelText("Select occasion type"), {
//         target: { value: "Birthday" },
//     });

//     fireEvent.click(screen.getByRole("button", { name: /submit/i }));

//     await waitFor(() => {
//         expect(mockSubmitForm).toHaveBeenCalled();
//     });
// });
