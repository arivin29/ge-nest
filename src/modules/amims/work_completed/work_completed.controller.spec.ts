import { Test, TestingModule } from '@nestjs/testing';
import { WorkCompletedController } from './work_completed.controller';
import { WorkCompletedService } from './work_completed.service';

describe('WorkCompletedController', () => {
  let controller: WorkCompletedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkCompletedController],
      providers: [
        {
          provide: WorkCompletedService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WorkCompletedController>(WorkCompletedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
