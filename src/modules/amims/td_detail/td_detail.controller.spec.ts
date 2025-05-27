import { Test, TestingModule } from '@nestjs/testing';
import { TdDetailController } from './td_detail.controller';
import { TdDetailService } from './td_detail.service';

describe('TdDetailController', () => {
  let controller: TdDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TdDetailController],
      providers: [
        {
          provide: TdDetailService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TdDetailController>(TdDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
