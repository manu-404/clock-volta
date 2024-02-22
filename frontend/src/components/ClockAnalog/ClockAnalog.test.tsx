import { render, screen } from "@testing-library/react";
import ClockAnalog from "./ClockAnalog";

describe('ClockAnalog', () => {
    it('Render', () => {
        const date = new Date('1995-12-17T12:00:00');
        
        render(<ClockAnalog time={date} />);

        expect(screen.getByTestId('hour').getAttribute('transform')).toBe(`rotate(0, 50, 50)`);
        expect(screen.getByTestId('minute').getAttribute('transform')).toBe(`rotate(0, 50, 50)`);
        expect(screen.getByTestId('second').getAttribute('transform')).toBe(`rotate(0, 50, 50)`);

    });
});