import { Test, TestingModule } from '@nestjs/testing';
import { VehiculeTypeService } from './vehicule-type.service';

describe('VehiculeTypeService', () => {
  let service: VehiculeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiculeTypeService],
    }).compile();

    service = module.get<VehiculeTypeService>(VehiculeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
