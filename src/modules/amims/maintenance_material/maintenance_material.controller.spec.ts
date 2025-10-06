import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceMaterialController } from './maintenance_material.controller';
import { MaintenanceMaterialService } from './maintenance_material.service';

describe('MaintenanceMaterialController', () => {
  let controller: MaintenanceMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceMaterialController],
      providers: [
        {
          provide: MaintenanceMaterialService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceMaterialController>(MaintenanceMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
