import { Test, TestingModule } from '@nestjs/testing';
import { PurPrclController } from './pur_prcl.controller';
import { PurPrclService } from './pur_prcl.service';

describe('PurPrclController', () => {
  let controller: PurPrclController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurPrclController],
      providers: [
        {
          provide: PurPrclService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurPrclController>(PurPrclController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
