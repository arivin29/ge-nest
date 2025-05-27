import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPmtrItemController } from './engineer_pmtr_item.controller';
import { EngineerPmtrItemService } from './engineer_pmtr_item.service';

describe('EngineerPmtrItemController', () => {
  let controller: EngineerPmtrItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerPmtrItemController],
      providers: [
        {
          provide: EngineerPmtrItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerPmtrItemController>(EngineerPmtrItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
