import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramItemController } from './maintenance_program_item.controller';
import { MaintenanceProgramItemService } from './maintenance_program_item.service';

describe('MaintenanceProgramItemController', () => {
  let controller: MaintenanceProgramItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceProgramItemController],
      providers: [
        {
          provide: MaintenanceProgramItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceProgramItemController>(MaintenanceProgramItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
