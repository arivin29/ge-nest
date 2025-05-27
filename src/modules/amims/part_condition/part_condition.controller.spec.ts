import { Test, TestingModule } from '@nestjs/testing';
import { PartConditionController } from './part_condition.controller';
import { PartConditionService } from './part_condition.service';

describe('PartConditionController', () => {
  let controller: PartConditionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartConditionController],
      providers: [
        {
          provide: PartConditionService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartConditionController>(PartConditionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
