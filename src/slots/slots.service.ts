import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFloorDto } from '../floors/dto/create-floor.dto';

@Injectable()
export class SlotsService {
  constructor(private dbService: PrismaService) {}
  async create(createSlotDto: Prisma.SlotCreateInput) {
    return this.dbService.slot.create({
      data: createSlotDto,
    });
  }

  findAll() {
    return this.dbService.slot.findMany();
  }

  findOne(id: string) {
    return this.dbService.slot.findUnique({ where: { id } });
  }

  update(id: string, updateSlotDto: any) {
    return this.dbService.slot.update({
      where: { id },
      data: updateSlotDto,
    });
  }

  remove(id: string) {
    return this.dbService.slot.delete({ where: { id } });
  }

  async findfreeSlot(vehiculeType: string) {
    return this.dbService.slot.groupBy({
      by: ['floorId'],
      where: {
        vehiculeTypeId: vehiculeType,
        free: true,
      },
    });
  }
}
