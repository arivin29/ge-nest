import { Test, TestingModule } from '@nestjs/testing';
import { ConditionMonitoringController } from './condition_monitoring.controller';
import { ConditionMonitoringService } from './condition_monitoring.service';

describe('ConditionMonitoringController', () => {
  let controller: ConditionMonitoringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConditionMonitoringController],
      providers: [
        {
          provide: ConditionMonitoringService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ConditionMonitoringController>(ConditionMonitoringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
