import { Test, TestingModule } from '@nestjs/testing';
import { VehiculeTypeController } from './vehicule-type.controller';
import { VehiculeTypeService } from './vehicule-type.service';

describe('VehiculeTypeController', () => {
  let controller: VehiculeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiculeTypeController],
      providers: [VehiculeTypeService],
    }).compile();

    controller = module.get<VehiculeTypeController>(VehiculeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
