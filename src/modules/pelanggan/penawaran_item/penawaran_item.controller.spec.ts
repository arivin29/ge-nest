import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranItemController } from './penawaran_item.controller';
import { PenawaranItemService } from './penawaran_item.service';

describe('PenawaranItemController', () => {
  let controller: PenawaranItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenawaranItemController],
      providers: [
        {
          provide: PenawaranItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PenawaranItemController>(PenawaranItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
