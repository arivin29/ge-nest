import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceMaterialService } from './maintenance_material.service';

describe('MaintenanceMaterialService', () => {
  let service: MaintenanceMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceMaterialService],
    }).compile();

    service = module.get<MaintenanceMaterialService>(MaintenanceMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
