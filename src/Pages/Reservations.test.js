describe("initializeTimes and updateTimes", () => {
    let initializeTimes, updateTimes;

    beforeEach(() => {
        // 1) Reset the module registry—ensures our mock is applied fresh each test
        jest.resetModules();

        // 2) Mock ../api.js so that fetchAPI returns a predictable array
        jest.doMock("../api.js", () => ({
            fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00"]),
        }));

        // 3) Mock localStorage.getItem to default to an empty bookings array
        Object.defineProperty(window, "localStorage", {
            configurable: true,
            value: {
                getItem: jest.fn(() => JSON.stringify([])),
            },
        });

        // 4) Import AFTER mocks are set up
        const reservationsModule = require("./Reservations");
        initializeTimes = reservationsModule.initializeTimes;
        updateTimes = reservationsModule.updateTimes;
    });

    test("initializeTimes returns all times when no bookings exist", () => {
        const result = initializeTimes();
        expect(result).toEqual(["17:00", "18:00", "19:00"]);
    });

    test("updateTimes returns all times for selected date when no bookings exist", () => {
        const action = { type: "update", date: "2025-09-30" };
        const result = updateTimes([], action);
        expect(result).toEqual(["17:00", "18:00", "19:00"]);
    });

    test("updateTimes filters out booked times for selected date", () => {
        // Override localStorage to simulate two bookings on 2025-09-30
        window.localStorage.getItem = jest.fn(() =>
            JSON.stringify([
                { date: "2025-09-30", time: "17:00" },
                { date: "2025-09-30", time: "18:00" },
            ])
        );

        const action = { type: "update", date: "2025-09-30" };
        const result = updateTimes([], action);
        expect(result).toEqual(["19:00"]);
    });
});
