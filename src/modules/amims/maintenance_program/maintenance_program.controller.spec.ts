import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramController } from './maintenance_program.controller';
import { MaintenanceProgramService } from './maintenance_program.service';

describe('MaintenanceProgramController', () => {
  let controller: MaintenanceProgramController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceProgramController],
      providers: [
        {
          provide: MaintenanceProgramService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceProgramController>(MaintenanceProgramController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
