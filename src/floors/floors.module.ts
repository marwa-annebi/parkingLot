import { Module } from '@nestjs/common';
import { FloorsService } from './floors.service';
import { FloorsController } from './floors.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [FloorsController],
  providers: [FloorsService],
  imports: [PrismaModule],
})
export class FloorsModule {}
