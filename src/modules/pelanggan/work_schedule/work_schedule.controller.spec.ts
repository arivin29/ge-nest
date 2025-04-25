import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleController } from './work_schedule.controller';
import { WorkScheduleService } from './work_schedule.service';

describe('WorkScheduleController', () => {
  let controller: WorkScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkScheduleController],
      providers: [
        {
          provide: WorkScheduleService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WorkScheduleController>(WorkScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
