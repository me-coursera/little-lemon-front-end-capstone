import { render, screen } from "@testing-library/react";
import BookingForm from "../Components/BookingForm";
import { initializeTimes, updateTimes } from "../Pages/Reservations";

// Step 1: Test for some static text being rendered in the BookingForm component
jest.mock("../context/alertContext", () => ({
    useAlertContext: () => ({
        onOpen: jest.fn(),
    }),
}));

const mockAvailableTimes = ["17:00", "18:00"];
const mockDispatch = jest.fn();

test("renders the BookingForm heading", () => {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}
        />
    );

    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});
///////////////////////////////////////////////////////////////////////////////////

// Step 2: Test the updateTimes and initializeTimes functions
// 2A: test initializeTimes function
test("initializeTimes returns correct default time slots", () => {
    const expectedTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];

    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});
//

// 2B: test updateTimes function
test("updateTimes returns same time slots regardless of date", () => {
    const initialState = initializeTimes();
    const action = { type: "update", date: "2025-09-30" };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
});
//
///////////////////////////////////////////////////////////////////////////////////
