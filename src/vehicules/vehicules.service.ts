import { Injectable } from '@nestjs/common';
import { CreateVehiculeDto } from './dto/create-vehicule.dto';
import { UpdateVehiculeDto } from './dto/update-vehicule.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VehiculesService {
  constructor(private dbService: PrismaService) {}
  create(createVehiculeDto: CreateVehiculeDto) {
    return this.dbService.vehicule.create({ data: createVehiculeDto });
  }

  findAll() {
    return this.dbService.vehicule.findMany();
  }

  findOne(id: Prisma.VehiculeWhereUniqueInput) {
    return this.dbService.vehicule.findUnique({ where: id });
  }

  update(id: Prisma.VehiculeWhereUniqueInput, data: any) {
    return this.dbService.vehicule.update({ data, where: id });
  }

  remove(id: Prisma.VehiculeWhereUniqueInput) {
    return this.dbService.vehicule.delete({ where: id });
  }
}
