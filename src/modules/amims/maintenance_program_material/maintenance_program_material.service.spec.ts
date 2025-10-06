import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramMaterialService } from './maintenance_program_material.service';

describe('MaintenanceProgramMaterialService', () => {
  let service: MaintenanceProgramMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceProgramMaterialService],
    }).compile();

    service = module.get<MaintenanceProgramMaterialService>(MaintenanceProgramMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
