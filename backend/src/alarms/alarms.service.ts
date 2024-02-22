import { Injectable } from '@nestjs/common';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { UpdateAlarmDto } from './dto/update-alarm.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Alarm } from './entities/alarm.entity';

@Injectable()
export class AlarmsService {
  constructor(private prisma: PrismaService) {}

  async create(createAlarmDto: CreateAlarmDto): Promise<Alarm> {
    return this.prisma.alarm.create({ data: createAlarmDto });
  }

  async findAll(): Promise<Alarm[]> {
    return this.prisma.alarm.findMany();
  }

  async findOne(id: number): Promise<Alarm> {
    return this.prisma.alarm.findFirst({ where: { id: id } });
  }

  async update(id: number, updateAlarmDto: UpdateAlarmDto): Promise<Alarm> {
    return this.prisma.alarm.update({ data: updateAlarmDto, where: { id: id } });
  }

  async remove(id: number): Promise<Alarm> {
    return this.prisma.alarm.delete({ where: { id: id } });
  }
}
