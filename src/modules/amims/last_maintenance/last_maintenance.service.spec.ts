import { Test, TestingModule } from '@nestjs/testing';
import { LastMaintenanceService } from './last_maintenance.service';

describe('LastMaintenanceService', () => {
  let service: LastMaintenanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LastMaintenanceService],
    }).compile();

    service = module.get<LastMaintenanceService>(LastMaintenanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
