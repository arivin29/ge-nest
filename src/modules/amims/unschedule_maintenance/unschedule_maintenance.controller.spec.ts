import { Test, TestingModule } from '@nestjs/testing';
import { UnscheduleMaintenanceController } from './unschedule_maintenance.controller';
import { UnscheduleMaintenanceService } from './unschedule_maintenance.service';

describe('UnscheduleMaintenanceController', () => {
  let controller: UnscheduleMaintenanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnscheduleMaintenanceController],
      providers: [
        {
          provide: UnscheduleMaintenanceService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UnscheduleMaintenanceController>(UnscheduleMaintenanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
