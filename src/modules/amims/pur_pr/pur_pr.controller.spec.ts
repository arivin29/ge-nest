import { Test, TestingModule } from '@nestjs/testing';
import { PurPrController } from './pur_pr.controller';
import { PurPrService } from './pur_pr.service';

describe('PurPrController', () => {
  let controller: PurPrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurPrController],
      providers: [
        {
          provide: PurPrService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurPrController>(PurPrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
