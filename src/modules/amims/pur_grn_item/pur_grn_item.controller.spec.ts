import { Test, TestingModule } from '@nestjs/testing';
import { PurGrnItemController } from './pur_grn_item.controller';
import { PurGrnItemService } from './pur_grn_item.service';

describe('PurGrnItemController', () => {
  let controller: PurGrnItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurGrnItemController],
      providers: [
        {
          provide: PurGrnItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurGrnItemController>(PurGrnItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
