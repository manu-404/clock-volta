import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { AlarmApi } from "../../api/AlarmApi";
import { Alarm } from "../../api/Alarm";
import AlarmCard from "../AlarmCard/AlarmCard";
import { AddCircle } from "@mui/icons-material";
import AlarmForm from "../AlarmForm/AlarmForm";

interface Props {
    alarms: Alarm[],
    refresh: boolean,
    setRefresh: (refresh: boolean) => void
}

export default function AlarmStack({ alarms, refresh, setRefresh }: Props) {
    const [selectedAlarm, setSelectedAlarm] = useState<Alarm | undefined>();
    const [showForm, setShowForm] = useState(false);

    function handleShowForm(alarm?: Alarm) {
        setSelectedAlarm(alarm);
        setShowForm(true);
    }

    function handleCloseForm() {
        setShowForm(false);
        setRefresh(true);
    }

    async function handleDelete(alarm: Alarm) {
        await AlarmApi.delete(alarm.id);
        setRefresh(true);
    }

    return (
        <Stack spacing={2}>
            {!refresh && alarms.map((alarm) => (
                <AlarmCard
                    key={alarm.id}
                    alarm={alarm}
                    handleShowForm={handleShowForm}
                    handleDelete={handleDelete}
                />
            ))}
            <Button data-testid='add' variant='contained' onClick={() => handleShowForm()}>
                <AddCircle />
            </Button>
            <AlarmForm
                alarm={selectedAlarm}
                showForm={showForm}
                handleCloseForm={handleCloseForm}
            />
        </Stack>
    );
}