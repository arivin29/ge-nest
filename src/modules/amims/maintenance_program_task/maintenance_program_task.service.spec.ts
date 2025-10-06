import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramTaskService } from './maintenance_program_task.service';

describe('MaintenanceProgramTaskService', () => {
  let service: MaintenanceProgramTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceProgramTaskService],
    }).compile();

    service = module.get<MaintenanceProgramTaskService>(MaintenanceProgramTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
