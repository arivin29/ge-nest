import { Test, TestingModule } from '@nestjs/testing';
import { PurPrItemController } from './pur_pr_item.controller';
import { PurPrItemService } from './pur_pr_item.service';

describe('PurPrItemController', () => {
  let controller: PurPrItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurPrItemController],
      providers: [
        {
          provide: PurPrItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurPrItemController>(PurPrItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
