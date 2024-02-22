import { Test, TestingModule } from '@nestjs/testing';
import { AlarmsService } from './alarms.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { Alarm } from './entities/alarm.entity';

describe('AlarmsService', () => {
  let service: AlarmsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [AlarmsService],
    }).compile();

    service = module.get<AlarmsService>(AlarmsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create', async () => {
    const alarm: Alarm = { id: 1, date: new Date() };

    const spyCreate = jest.spyOn(prisma.alarm, 'create').mockResolvedValue(alarm);

    expect(await service.create({ date: alarm.date })).toBe(alarm);

    expect(spyCreate).toHaveBeenCalledTimes(1);
    expect(spyCreate).toHaveBeenCalledWith({ data: { date: alarm.date } });
  });

  it('findAll', async () => {
    const alarms: Alarm[] = [{ id: 1, date: new Date() }];

    const spyFindAll = jest.spyOn(prisma.alarm, 'findMany').mockResolvedValue(alarms);

    expect(await service.findAll()).toBe(alarms);

    expect(spyFindAll).toHaveBeenCalledTimes(1);
  });

  it('findOne', async () => {
    const alarm: Alarm = { id: 1, date: new Date() };

    const spyFindOne = jest.spyOn(prisma.alarm, 'findFirst').mockResolvedValue(alarm);

    expect(await service.findOne(1)).toBe(alarm);

    expect(spyFindOne).toHaveBeenCalledTimes(1);
    expect(spyFindOne).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('update', async () => {
    const alarm: Alarm = { id: 1, date: new Date() };

    const spyUpdate = jest.spyOn(prisma.alarm, 'update').mockResolvedValue(alarm);

    expect(await service.update(1, { date: alarm.date })).toBe(alarm);

    expect(spyUpdate).toHaveBeenCalledTimes(1);
    expect(spyUpdate).toHaveBeenCalledWith({ data: { date: alarm.date }, where: { id: 1 } });
  });

  it('remove', async () => {
    const alarm: Alarm = { id: 1, date: new Date() };

    const spyRemove = jest.spyOn(prisma.alarm, 'delete').mockResolvedValue(alarm);

    expect(await service.remove(1)).toBe(alarm);

    expect(spyRemove).toHaveBeenCalledTimes(1);
    expect(spyRemove).toHaveBeenCalledWith({ where: { id: 1 } });
  });

});
