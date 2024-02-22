import { Close, Done } from '@mui/icons-material';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { TimeClock } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { Alarm } from '../../api/Alarm';
import { AlarmApi } from '../../api/AlarmApi';
import formatDateToTimeString from '../../utils/DateUtils';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};


interface Props {
    alarm?: Alarm,
    showForm: boolean,
    handleCloseForm: () => void
} ;

export default function AlarmForm({ alarm, showForm, handleCloseForm }: Props) {
    const [date, setDate] = useState<Dayjs>(alarm ? dayjs(alarm.date) : dayjs(Date.now()));

    function handleDone() {
        if (!alarm) {
            AlarmApi.create({ date: date.toDate() });
        } else {
            AlarmApi.update(alarm.id, { date: date.toDate() });
        }
        handleCloseForm();
    }

    function handleClose() {
        handleCloseForm();
    }

    return (
        <Modal
            open={showForm}
            onClose={handleCloseForm}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TimeClock value={date} onChange={(newDate) => setDate(newDate)} ampm={false} />
                <Typography variant='body1'>
                    {formatDateToTimeString(date.toDate())}
                </Typography>
                <IconButton data-testid='close' onClick={handleClose}>
                    <Close />
                </IconButton>
                <IconButton data-testid='done' onClick={handleDone}>
                    <Done />
                </IconButton>
            </Box>
        </Modal>
    );
}