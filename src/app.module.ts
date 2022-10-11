import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingsModule } from './parkings/parkings.module';
import { FloorsModule } from './floors/floors.module';
import { SlotsModule } from './slots/slots.module';
import { VehiculesModule } from './vehicules/vehicules.module';
import { VehiculeTypeModule } from './vehicule-type/vehicule-type.module';
import { TicketsModule } from './tickets/tickets.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ParkingsModule, FloorsModule, SlotsModule, VehiculesModule, VehiculeTypeModule, TicketsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
