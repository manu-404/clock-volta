import { useEffect, useState } from "react";
import { Alarm } from "../../api/Alarm";
import { Box, Snackbar, Typography } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";
import formatDateToTimeString from "../../utils/DateUtils";

interface Props {
    alarms: Alarm[],
    time: Date
}
export default function AlarmNotification({ alarms, time }: Props) {
    const [showAlarm, setShowAlarm] = useState(false);

    useEffect(() => {
        const triggerAlarm = alarms.map((alarm) => {
            alarm.date.setSeconds(0, 0);
            return alarm.date.toLocaleTimeString();
        }).some((alarmTime) => alarmTime === time.toLocaleTimeString());

        setShowAlarm((showAlarm) => showAlarm || triggerAlarm);
    }, [alarms, time])

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={6000}
            open={showAlarm}
            onClose={() => setShowAlarm(false)}
        >
            <Box>
                <AccessAlarm color='primary' />
                <Typography variant='body1'>
                    Alarme : {formatDateToTimeString(time)}
                </Typography>
            </Box>
        </Snackbar>
    );
}