import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SlotsService } from './slots.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';
import { PrismaService } from '../prisma/prisma.service';

@Controller('slots')
export class SlotsController {
  constructor(
    private readonly slotsService: SlotsService,
    private dbService: PrismaService,
  ) {}

  @Post()
  async create(
    @Body()
    createSlotDto: {
      vehiculeTypeId: string;
      floorId: number;
      slotNumber: number;
    },
  ) {
    const { vehiculeTypeId, floorId } = createSlotDto;
    const count = await this.dbService.slot
      .findMany({ where: { floorId: +floorId } })
      .then((floors) => {
        console.log(floors);
        return floors.length + 1;
      });

    return this.slotsService.create({
      slotNumber: +count,
      floor: {
        connect: { id: floorId },
      },
      vehiculeType: {
        connect: { name: vehiculeTypeId },
      },
    });
    // return this.dbService.floor.update({
    //   where: { id: floorId },
    //   data: {
    //     slots: {
    //       set: (await slot).id,
    //       // },
    //     },
    //   },
    // });
  }

  @Get()
  findAll() {
    return this.slotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slotsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlotDto: any) {
    return this.slotsService.update(id, updateSlotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slotsService.remove(id);
  }
  @Get('/freeSlot/:id')
  findFreeSlot(@Param('id') vehiculetype: string) {
    return this.slotsService.findfreeSlot(vehiculetype);
  }
}
