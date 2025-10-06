import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramService } from './maintenance_program.service';

describe('MaintenanceProgramService', () => {
  let service: MaintenanceProgramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceProgramService],
    }).compile();

    service = module.get<MaintenanceProgramService>(MaintenanceProgramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
