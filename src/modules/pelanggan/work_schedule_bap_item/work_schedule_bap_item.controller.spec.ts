import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleBapItemController } from './work_schedule_bap_item.controller';
import { WorkScheduleBapItemService } from './work_schedule_bap_item.service';

describe('WorkScheduleBapItemController', () => {
  let controller: WorkScheduleBapItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkScheduleBapItemController],
      providers: [
        {
          provide: WorkScheduleBapItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<WorkScheduleBapItemController>(WorkScheduleBapItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
