import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehiculeTypeService } from './vehicule-type.service';
import { CreateVehiculeTypeDto } from './dto/create-vehicule-type.dto';
import { UpdateVehiculeTypeDto } from './dto/update-vehicule-type.dto';

@Controller('vehicule-type')
export class VehiculeTypeController {
  constructor(private readonly vehiculeTypeService: VehiculeTypeService) {}

  @Post()
  create(@Body() createVehiculeTypeDto: CreateVehiculeTypeDto) {
    return this.vehiculeTypeService.create(createVehiculeTypeDto);
  }

  @Get()
  findAll() {
    return this.vehiculeTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiculeTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehiculeTypeDto: UpdateVehiculeTypeDto) {
    return this.vehiculeTypeService.update(+id, updateVehiculeTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiculeTypeService.remove(+id);
  }
}
