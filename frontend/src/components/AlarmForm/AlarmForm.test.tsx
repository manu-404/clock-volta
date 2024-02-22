import { fireEvent, render, screen } from "@testing-library/react";
import AlarmForm from "./AlarmForm";
import { AlarmApi } from "../../api/AlarmApi";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const handleCloseForm = jest.fn();

describe('AlarmForm', () => {
    const alarm = {
        id: 1,
        date: new Date('1995-12-17T05:02:45')
    };

    it('handleDone create', () => {
        const spyCreate = jest.spyOn(AlarmApi, 'create').mockResolvedValue();

        render(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <AlarmForm showForm={true} handleCloseForm={handleCloseForm} />
            </LocalizationProvider>);

        fireEvent.click(screen.getByTestId('done'));
        expect(spyCreate).toHaveBeenCalledTimes(1)
        expect(handleCloseForm).toHaveBeenCalledTimes(1);
    });

    it('handleDone edit', () => {
        const spyEdit = jest.spyOn(AlarmApi, 'update').mockResolvedValue();

        const alarm = {
            id: 1,
            date: new Date('1995-12-17T05:02:45')
        };

        render(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <AlarmForm alarm={alarm} showForm={true} handleCloseForm={handleCloseForm} />
            </LocalizationProvider>
        );

        fireEvent.click(screen.getByTestId('done'));
        expect(spyEdit).toHaveBeenCalledTimes(1)
        expect(handleCloseForm).toHaveBeenCalledTimes(1);
    });

    it('handleClose', () => {
        render(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <AlarmForm showForm={true} handleCloseForm={handleCloseForm} />
            </LocalizationProvider>
        );

        fireEvent.click(screen.getByTestId('close'));
        expect(handleCloseForm).toHaveBeenCalledTimes(1);
    });
});