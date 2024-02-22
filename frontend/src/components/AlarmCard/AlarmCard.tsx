import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Alarm } from "../../api/Alarm";
import { AccessAlarm, Delete, Edit } from "@mui/icons-material";
import formatDateToTimeString from "../../utils/DateUtils";

interface Props {
    alarm: Alarm,
    handleShowForm: (alarm: Alarm) => void,
    handleDelete: (alarm: Alarm) => void
};

export default function AlarmCard({ alarm, handleShowForm, handleDelete }: Props) {
    return (
        <Card>
            <CardContent>
                <CardMedia>
                    <AccessAlarm color='primary' />
                </CardMedia>
                <Typography variant='body1'>
                    {formatDateToTimeString(alarm.date)}
                </Typography>
                <IconButton data-testid='delete' onClick={() => handleDelete(alarm)}>
                    <Delete />
                </IconButton>
                <IconButton data-testid='edit' onClick={() => handleShowForm(alarm)}>
                    <Edit />
                </IconButton>
            </CardContent>
        </Card>
    );
}