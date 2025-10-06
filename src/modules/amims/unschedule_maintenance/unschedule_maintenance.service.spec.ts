import { Test, TestingModule } from '@nestjs/testing';
import { UnscheduleMaintenanceService } from './unschedule_maintenance.service';

describe('UnscheduleMaintenanceService', () => {
  let service: UnscheduleMaintenanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnscheduleMaintenanceService],
    }).compile();

    service = module.get<UnscheduleMaintenanceService>(UnscheduleMaintenanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
