import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehiculesService } from './vehicules.service';
import { CreateVehiculeDto } from './dto/create-vehicule.dto';
import { UpdateVehiculeDto } from './dto/update-vehicule.dto';

@Controller('vehicules')
export class VehiculesController {
  constructor(private readonly vehiculesService: VehiculesService) {}
  @Post()
  create(@Body() createVehiculeDto: CreateVehiculeDto) {
    return this.vehiculesService.create(createVehiculeDto);
  }

  @Get()
  findAll() {
    return this.vehiculesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') licenseNumber: string) {
    return this.vehiculesService.findOne({ licenseNumber });
  }

  @Patch(':id')
  update(@Param('id') licenseNumber: string, @Body() updateVehiculeDto: any) {
    return this.vehiculesService.update({ licenseNumber }, updateVehiculeDto);
  }

  @Delete(':id')
  remove(@Param('id') licenseNumber: string) {
    return this.vehiculesService.remove({ licenseNumber });
  }
}
