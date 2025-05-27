import { Test, TestingModule } from '@nestjs/testing';
import { LogTransferController } from './log_transfer.controller';
import { LogTransferService } from './log_transfer.service';

describe('LogTransferController', () => {
  let controller: LogTransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogTransferController],
      providers: [
        {
          provide: LogTransferService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LogTransferController>(LogTransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
