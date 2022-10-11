import { Module } from '@nestjs/common';
import { ParkingsService } from './parkings.service';
import { ParkingsController } from './parkings.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ParkingsController],
  providers: [ParkingsService],
  imports: [PrismaModule],
})
export class ParkingsModule {}
