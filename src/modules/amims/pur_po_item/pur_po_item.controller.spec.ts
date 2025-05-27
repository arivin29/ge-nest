import { Test, TestingModule } from '@nestjs/testing';
import { PurPoItemController } from './pur_po_item.controller';
import { PurPoItemService } from './pur_po_item.service';

describe('PurPoItemController', () => {
  let controller: PurPoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurPoItemController],
      providers: [
        {
          provide: PurPoItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurPoItemController>(PurPoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
