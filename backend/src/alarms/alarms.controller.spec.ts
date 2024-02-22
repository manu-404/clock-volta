import { Test, TestingModule } from '@nestjs/testing';
import { AlarmsController } from './alarms.controller';
import { AlarmsService } from './alarms.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { UpdateAlarmDto } from './dto/update-alarm.dto';

describe('AlarmsController', () => {
  let controller: AlarmsController;
  let service: AlarmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [AlarmsController],
      providers: [AlarmsService],
    }).compile();

    controller = module.get<AlarmsController>(AlarmsController);
    service = module.get<AlarmsService>(AlarmsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create', () => {
    const createAlarmDto: CreateAlarmDto = { date: new Date() };
    
    const createSpy = jest.spyOn(service, 'create').mockResolvedValue({...createAlarmDto, id: 1});

    controller.create(createAlarmDto);

    expect(createSpy).toHaveBeenCalledTimes(1);
    expect(createSpy).toHaveBeenCalledWith(createAlarmDto);
  })

  it('findAll', async () => {    
    const alarms = [{id: 1, date: new Date()}];
    const findAllSpy = jest.spyOn(service, 'findAll').mockResolvedValue(alarms);

    expect(await controller.findAll()).toBe(alarms);

    expect(findAllSpy).toHaveBeenCalledTimes(1);
  })

  it('findOne', async () => {    
    const alarm = {id: 1, date: new Date()};
    const findOne = jest.spyOn(service, 'findOne').mockResolvedValue(alarm);

    expect(await controller.findOne('1')).toBe(alarm);

    expect(findOne).toHaveBeenCalledTimes(1);
    expect(findOne).toHaveBeenCalledWith(1);
  })

  it('update', () => {
    const updateAlarmDto: UpdateAlarmDto = { date: new Date() };
    
    const updateSpy = jest.spyOn(service, 'update').mockResolvedValue({date: updateAlarmDto.date, id: 1});

    controller.update('1', updateAlarmDto);

    expect(updateSpy).toHaveBeenCalledTimes(1);
    expect(updateSpy).toHaveBeenCalledWith(1, updateAlarmDto);
  })

  it('remove', () => {    
    const deleteSpy = jest.spyOn(service, 'remove').mockResolvedValue({date: new Date(), id: 1});

    controller.remove('1');

    expect(deleteSpy).toHaveBeenCalledTimes(1);
    expect(deleteSpy).toHaveBeenCalledWith(1);
  })
});
