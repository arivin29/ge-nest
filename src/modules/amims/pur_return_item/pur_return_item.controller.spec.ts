import { Test, TestingModule } from '@nestjs/testing';
import { PurReturnItemController } from './pur_return_item.controller';
import { PurReturnItemService } from './pur_return_item.service';

describe('PurReturnItemController', () => {
  let controller: PurReturnItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurReturnItemController],
      providers: [
        {
          provide: PurReturnItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurReturnItemController>(PurReturnItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
