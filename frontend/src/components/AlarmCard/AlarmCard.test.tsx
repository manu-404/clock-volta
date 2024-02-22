import { fireEvent, render, screen } from "@testing-library/react";
import AlarmCard from "./AlarmCard";
import formatDateToTimeString from "../../utils/DateUtils";

const handleDelete = jest.fn();
const handleShowForm = jest.fn();

describe('AlarmCard', () => {
    const alarm = {
        id: 1,
        date: new Date('1995-12-17T05:02:45')
    };

    beforeEach(() => {
        render(<AlarmCard alarm={alarm} handleDelete={handleDelete} handleShowForm={handleShowForm} />);
    }) 

    it('render', () => {
        const regexp = new RegExp(formatDateToTimeString(alarm.date), 'i');
        expect(screen.getByText(regexp)).toBeDefined();
    });

    it('click delete', () => {
        fireEvent.click(screen.getByTestId('delete'));
        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toBeCalledWith(alarm);
    });

    it('click edit', () => {
        fireEvent.click(screen.getByTestId('edit'));
        expect(handleShowForm).toHaveBeenCalledTimes(1);
        expect(handleShowForm).toBeCalledWith(alarm);
    });
}) 