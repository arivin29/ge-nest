import { Test, TestingModule } from '@nestjs/testing';
import { TdRefController } from './td_ref.controller';
import { TdRefService } from './td_ref.service';

describe('TdRefController', () => {
  let controller: TdRefController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TdRefController],
      providers: [
        {
          provide: TdRefService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TdRefController>(TdRefController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
