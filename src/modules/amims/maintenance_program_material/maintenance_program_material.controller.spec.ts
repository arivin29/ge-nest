import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramMaterialController } from './maintenance_program_material.controller';
import { MaintenanceProgramMaterialService } from './maintenance_program_material.service';

describe('MaintenanceProgramMaterialController', () => {
  let controller: MaintenanceProgramMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceProgramMaterialController],
      providers: [
        {
          provide: MaintenanceProgramMaterialService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceProgramMaterialController>(MaintenanceProgramMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
