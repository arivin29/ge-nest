import { Test, TestingModule } from '@nestjs/testing';
import { MpcSelfMaintenanceService } from './mpc_self_maintenance.service';

describe('MpcSelfMaintenanceService', () => {
  let service: MpcSelfMaintenanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpcSelfMaintenanceService],
    }).compile();

    service = module.get<MpcSelfMaintenanceService>(MpcSelfMaintenanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
