import formatDateToTimeString from "./DateUtils";

describe('DateUtils', () => {
    it('formatDateToTimeString', () => {
        const datePM = new Date('1995-12-17T15:24:45');
        expect(formatDateToTimeString(datePM)).toBe('03:24 PM');

        const dateAM = new Date('1995-12-17T02:24:45');
        expect(formatDateToTimeString(dateAM)).toBe('02:24 AM');
    });
});