import { Test, TestingModule } from '@nestjs/testing';
import { PurGrnController } from './pur_grn.controller';
import { PurGrnService } from './pur_grn.service';

describe('PurGrnController', () => {
  let controller: PurGrnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurGrnController],
      providers: [
        {
          provide: PurGrnService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurGrnController>(PurGrnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
