import { Injectable } from '@nestjs/common';
import { CreateVehiculeTypeDto } from './dto/create-vehicule-type.dto';
import { UpdateVehiculeTypeDto } from './dto/update-vehicule-type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VehiculeTypeService {
  constructor(private dbService: PrismaService) {}

  create(createTypeVehiculeDto: CreateVehiculeTypeDto) {
    return this.dbService.type_Vehicule.create({ data: createTypeVehiculeDto });
  }

  findAll() {
    return this.dbService.type_Vehicule.findMany();
  }

  findOne(id: number) {
    return this.dbService.type_Vehicule.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.dbService.type_Vehicule.update({ data, where: { id } });
  }

  remove(id: number) {
    return this.dbService.type_Vehicule.delete({ where: { id } });
  }
}
