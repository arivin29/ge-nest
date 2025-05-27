import { Test, TestingModule } from '@nestjs/testing';
import { TdDetailAcController } from './td_detail_ac.controller';
import { TdDetailAcService } from './td_detail_ac.service';

describe('TdDetailAcController', () => {
  let controller: TdDetailAcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TdDetailAcController],
      providers: [
        {
          provide: TdDetailAcService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TdDetailAcController>(TdDetailAcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
