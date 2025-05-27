import { Test, TestingModule } from '@nestjs/testing';
import { PurReturnController } from './pur_return.controller';
import { PurReturnService } from './pur_return.service';

describe('PurReturnController', () => {
  let controller: PurReturnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurReturnController],
      providers: [
        {
          provide: PurReturnService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurReturnController>(PurReturnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
