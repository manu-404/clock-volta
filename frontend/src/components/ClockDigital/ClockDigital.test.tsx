import { render, screen } from "@testing-library/react";
import ClockDigital from "./ClockDigital"

describe('ClockDigital', () => {
    it('Render', () => {
        const date = new Date('1995-12-17T05:02:45');
        
        render(<ClockDigital time={date} />);

        expect(screen.getByText(/05:02:45/i)).toBeDefined();
    });
});