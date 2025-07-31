import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranHistoryController } from './penawaran_history.controller';
import { PenawaranHistoryService } from './penawaran_history.service';

describe('PenawaranHistoryController', () => {
  let controller: PenawaranHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenawaranHistoryController],
      providers: [
        {
          provide: PenawaranHistoryService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PenawaranHistoryController>(PenawaranHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
