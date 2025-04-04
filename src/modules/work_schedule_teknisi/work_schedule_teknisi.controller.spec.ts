import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleTeknisiController } from './work_schedule_teknisi.controller';
import { WorkScheduleTeknisiService } from './work_schedule_teknisi.service';

describe('WorkScheduleTeknisiController', () => {
  let controller: WorkScheduleTeknisiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkScheduleTeknisiController],
      providers: [
        {
          provide: WorkScheduleTeknisiService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WorkScheduleTeknisiController>(WorkScheduleTeknisiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
