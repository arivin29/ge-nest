import { Test, TestingModule } from '@nestjs/testing';
import { LastMaintenanceController } from './last_maintenance.controller';
import { LastMaintenanceService } from './last_maintenance.service';

describe('LastMaintenanceController', () => {
  let controller: LastMaintenanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LastMaintenanceController],
      providers: [
        {
          provide: LastMaintenanceService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LastMaintenanceController>(LastMaintenanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
