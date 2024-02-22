import { Typography } from "@mui/material";

export default function ClockDigital({ time }: { time: Date} ) {
    return (
        <Typography variant="h4">
            { formatInTwoDigit(time.getHours()) }
            :
            { formatInTwoDigit(time.getMinutes()) }
            :
            { formatInTwoDigit(time.getSeconds()) }
        </Typography>
    )
}

function formatInTwoDigit(numberToFormat: number) {
    return String(numberToFormat).padStart(2, '0');
}