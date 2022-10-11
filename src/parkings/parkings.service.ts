import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ParkingsService {
  constructor(private dbService: PrismaService) {}
  create(createParkingDto: CreateParkingDto) {
    return this.dbService.parking.create({ data: createParkingDto });
  }

  findAll() {
    return this.dbService.parking.findMany();
  }

  findOne(id: number) {
    return this.dbService.parking.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.dbService.parking.update({ data, where: { id } });
  }

  remove(id: number) {
    return this.dbService.parking.delete({ where: { id } });
  }
}
