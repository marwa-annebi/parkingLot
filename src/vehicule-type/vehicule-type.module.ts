import { Module } from '@nestjs/common';
import { VehiculeTypeService } from './vehicule-type.service';
import { VehiculeTypeController } from './vehicule-type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [VehiculeTypeController],
  providers: [VehiculeTypeService],
  imports: [PrismaModule],
})
export class VehiculeTypeModule {}
