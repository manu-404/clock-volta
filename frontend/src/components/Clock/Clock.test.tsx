import { render, screen } from "@testing-library/react";
import Clock from "./Clock";

describe('Clock', () => {
    it('render time section', () => {
        render(<Clock />);

        expect(screen.getByText(/\d\d:\d\d:\d\d/)).toBeDefined();
    })
    it('render alarm section', () => {
        render(<Clock />);

        expect(screen.getByText(/Alarmes/i)).toBeDefined();
    });
});