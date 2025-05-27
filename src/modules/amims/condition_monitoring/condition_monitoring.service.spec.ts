import { Test, TestingModule } from '@nestjs/testing';
import { ConditionMonitoringService } from './condition_monitoring.service';

describe('ConditionMonitoringService', () => {
  let service: ConditionMonitoringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConditionMonitoringService],
    }).compile();

    service = module.get<ConditionMonitoringService>(ConditionMonitoringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
