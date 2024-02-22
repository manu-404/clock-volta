import { fireEvent, render, screen } from "@testing-library/react";
import AlarmStack from "./AlarmStack";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const setRefresh = jest.fn();

describe('AlarmStack', () => {
    const alarms = [{
        id: 1,
        date: new Date()
    }];

    it('render alarms', () => {
        render(<AlarmStack alarms={alarms} refresh={false} setRefresh={setRefresh} />);

        expect(screen.getByText(/\d\d:\d\d (?:A|P)M/)).toBeDefined();
        expect(screen.queryByTestId('done')).toBeNull();
    });

    it(`don't render alarms`, () => {
        render(<AlarmStack alarms={alarms} refresh={true} setRefresh={setRefresh} />);

        expect(screen.queryByText(/\d\d:\d\d (?:A|P)M/)).toBeNull();
        expect(screen.queryByTestId('done')).toBeNull();
    });

    it('add button show form', () => {
        render(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <AlarmStack alarms={alarms} refresh={false} setRefresh={setRefresh} />
            </LocalizationProvider>
        );

        fireEvent.click(screen.getByTestId('add'));

        expect(screen.getByTestId('done')).toBeDefined();
    });
});