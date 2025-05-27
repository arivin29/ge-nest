import { Test, TestingModule } from '@nestjs/testing';
import { MpcSelfMaintenanceController } from './mpc_self_maintenance.controller';
import { MpcSelfMaintenanceService } from './mpc_self_maintenance.service';

describe('MpcSelfMaintenanceController', () => {
  let controller: MpcSelfMaintenanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpcSelfMaintenanceController],
      providers: [
        {
          provide: MpcSelfMaintenanceService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MpcSelfMaintenanceController>(MpcSelfMaintenanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
