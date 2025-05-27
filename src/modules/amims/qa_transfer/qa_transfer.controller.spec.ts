import { Test, TestingModule } from '@nestjs/testing';
import { QaTransferController } from './qa_transfer.controller';
import { QaTransferService } from './qa_transfer.service';

describe('QaTransferController', () => {
  let controller: QaTransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QaTransferController],
      providers: [
        {
          provide: QaTransferService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<QaTransferController>(QaTransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
