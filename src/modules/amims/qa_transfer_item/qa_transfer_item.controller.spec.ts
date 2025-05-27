import { Test, TestingModule } from '@nestjs/testing';
import { QaTransferItemController } from './qa_transfer_item.controller';
import { QaTransferItemService } from './qa_transfer_item.service';

describe('QaTransferItemController', () => {
  let controller: QaTransferItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QaTransferItemController],
      providers: [
        {
          provide: QaTransferItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<QaTransferItemController>(QaTransferItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
