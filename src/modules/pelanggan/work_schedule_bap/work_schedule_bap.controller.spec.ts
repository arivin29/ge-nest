import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleBapController } from './work_schedule_bap.controller';
import { WorkScheduleBapService } from './work_schedule_bap.service';

describe('WorkScheduleBapController', () => {
  let controller: WorkScheduleBapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkScheduleBapController],
      providers: [
        {
          provide: WorkScheduleBapService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WorkScheduleBapController>(WorkScheduleBapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
