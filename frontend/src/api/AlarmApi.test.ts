import { Alarm } from "./Alarm";
import { AlarmApi } from "./AlarmApi";
import { AlarmApiRequest } from "./AlarmApiRequest";
import { AlarmApiResponse } from "./AlarmApiResponse";

describe('AlarmApi', () => {
    const alarmsApiResponse: AlarmApiResponse[] = [{ id: 1, date: '1995-12-17T05:02:45' }];
    const fetchResponse = { ok: true, status: 200 } as Response;

    it('getAll', async () => {
        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({ ...fetchResponse, json: async () => alarmsApiResponse });

        expect(await AlarmApi.getAll()).toStrictEqual([{ id: 1, date: new Date('1995-12-17T05:02:45') }]);

        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_BACKEND_URL}/alarms`);
    });

    it('delete', async () => {
        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({ ...fetchResponse });

        await AlarmApi.delete(1);

        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_BACKEND_URL}/alarms/1`, { method: "DELETE" });
    });

    it('create', async () => {
        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({ ...fetchResponse });

        const alarm: AlarmApiRequest = { date: new Date() };

        await AlarmApi.create(alarm);

        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_BACKEND_URL}/alarms`, {
            method: "POST",
            body: JSON.stringify(alarm),
            headers: {
                "Content-Type": "application/json"
            }
        });
    });

    it('update', async () => {
        const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({ ...fetchResponse });

        const alarm: AlarmApiRequest = { date: new Date() };

        await AlarmApi.update(1, alarm);

        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(`${process.env.REACT_APP_BACKEND_URL}/alarms/1`, {
            method: "PATCH",
            body: JSON.stringify(alarm),
            headers: {
                "Content-Type": "application/json"
            }
        });
    });
})