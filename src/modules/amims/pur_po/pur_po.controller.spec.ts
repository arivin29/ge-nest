import { Test, TestingModule } from '@nestjs/testing';
import { PurPoController } from './pur_po.controller';
import { PurPoService } from './pur_po.service';

describe('PurPoController', () => {
  let controller: PurPoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurPoController],
      providers: [
        {
          provide: PurPoService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurPoController>(PurPoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
