import { Injectable } from '@nestjs/common';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FloorsService {
  constructor(private dbService: PrismaService) {}
  async create(createFloorDto: CreateFloorDto, parkingId: number) {
    let { id } = createFloorDto;
    const count = await this.dbService.floor
      .findMany({
        where: { parkingId: +parkingId },
      })
      .then((floors) => {
        // console.log(floors.length + 1);

        return floors.length;
      });

    id = +count + 1;

    return this.dbService.floor.create({
      data: {
        id: id,
        parkingId: +parkingId,
      },
    });
  }

  findAll() {
    return `This action returns all floors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} floor`;
  }

  update(id: number, updateFloorDto: UpdateFloorDto) {
    return `This action updates a #${id} floor`;
  }

  remove(id: number) {
    return `This action removes a #${id} floor`;
  }
}
