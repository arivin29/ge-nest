import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramTaskController } from './maintenance_program_task.controller';
import { MaintenanceProgramTaskService } from './maintenance_program_task.service';

describe('MaintenanceProgramTaskController', () => {
  let controller: MaintenanceProgramTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceProgramTaskController],
      providers: [
        {
          provide: MaintenanceProgramTaskService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceProgramTaskController>(MaintenanceProgramTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
