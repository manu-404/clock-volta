import { useEffect, useState } from "react";
import ClockAnalog from "../ClockAnalog/ClockAnalog";
import ClockDigital from "../ClockDigital/ClockDigital";
import { Alarm } from "../../api/Alarm";
import { AlarmApi } from "../../api/AlarmApi";
import AlarmStack from "../AlarmStack/AlarmStack";
import AlarmNotification from "../AlarmNotification/AlarmNotification";
import { Box, Stack, Typography } from "@mui/material";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [alarms, setAlarms] = useState<Alarm[]>([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const fetchAlarm = async () => {
            const alarms = await AlarmApi.getAll();
            setAlarms(alarms);
            setRefresh(false);
        }

        fetchAlarm();
    }, [refresh]);

    return (
        <Stack sx={{ width: '90%', height: '100%' }} spacing={2} direction='row' >
            <Box sx={{ width: '25%', height: '100%' }}>
                <Typography variant="h4" sx={{ marginBottom: '2%' }}>
                    Alarmes :
                </Typography>
                <AlarmStack
                    alarms={alarms}
                    refresh={refresh}
                    setRefresh={setRefresh}
                />
            </Box>
            <Box sx={{ width: '75%', height: '100%' }}>
                <ClockDigital time={time} />
                <ClockAnalog time={time} />
            </Box>
            <AlarmNotification
                alarms={alarms}
                time={time}
            />
        </Stack>
    );
}