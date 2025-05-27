import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceCodeController } from './maintenance_code.controller';
import { MaintenanceCodeService } from './maintenance_code.service';

describe('MaintenanceCodeController', () => {
  let controller: MaintenanceCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceCodeController],
      providers: [
        {
          provide: MaintenanceCodeService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceCodeController>(MaintenanceCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
