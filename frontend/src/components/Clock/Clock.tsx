import { useEffect, useState } from "react";
import ClockAnalog from "../ClockAnalog/ClockAnalog";
import ClockDigital from "../ClockDigital/ClockDigital";
import { Box, Stack, Typography } from "@mui/material";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <Stack sx={{ width: '90%', height: '100%' }} spacing={2} direction='row' >
            <Box sx={{ width: '25%', height: '100%' }}>
                <Typography variant="h4" sx={{ marginBottom: '2%' }}>
                    Alarmes :
                </Typography>
            </Box>
            <Box sx={{ width: '75%', height: '100%' }}>
                <ClockDigital time={time} />
                <ClockAnalog time={time} />
            </Box>
        </Stack>
    );
}