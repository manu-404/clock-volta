import { render, screen } from "@testing-library/react"
import AlarmNotification from "./AlarmNotification"

describe('AlarmNotification', () => {
    it('show notification', () => {
        const alarms = [{
            id: 1,
            date: new Date('1995-12-17T12:00:00')
        }];
        const time = new Date('1995-12-17T12:00:00');

        render(<AlarmNotification alarms={alarms} time={time} />);

        expect(screen.getByText(/Alarme :/)).toBeDefined();
    });

    it(`don't show notification`, () => {
        const alarms = [{
            id: 1,
            date: new Date('1995-12-17T14:00:00')
        }];
        const time = new Date('1995-12-17T12:00:00');

        render(<AlarmNotification alarms={alarms} time={time} />);

        expect(screen.queryByText(/Alarme :/)).toBeNull();
    });
});