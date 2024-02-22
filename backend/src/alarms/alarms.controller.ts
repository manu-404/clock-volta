import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlarmsService } from './alarms.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { UpdateAlarmDto } from './dto/update-alarm.dto';
import { Alarm } from './entities/alarm.entity';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto): void {
    this.alarmsService.create(createAlarmDto);
  }

  @Get()
  findAll(): Promise<Alarm[]> {
    return this.alarmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Alarm> {
    return this.alarmsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlarmDto: UpdateAlarmDto): void {
    this.alarmsService.update(+id, updateAlarmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.alarmsService.remove(+id);
  }
}
