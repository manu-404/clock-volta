import { Alarm } from "./Alarm";
import { AlarmApiResponse } from "./AlarmApiResponse";
import { AlarmApiRequest } from "./AlarmApiRequest";

export class AlarmApi {
    static async getAll(): Promise<Alarm[]> {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/alarms`);
        const data: AlarmApiResponse[] = await response.json();
        return data.map((alarmData) => ({ ...alarmData, date: new Date(alarmData.date) }));
    }

    static async delete(id: number): Promise<void> {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/alarms/${id}`, { method: "DELETE" });
    }

    static async create(alarm: AlarmApiRequest): Promise<void> {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/alarms`, {
            method: "POST",
            body: JSON.stringify(alarm),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    static async update(id: number, alarm: AlarmApiRequest): Promise<void> {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/alarms/${id}`, {
            method: "PATCH",
            body: JSON.stringify(alarm),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}