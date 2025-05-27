import { Test, TestingModule } from '@nestjs/testing';
import { InternalGrnItemController } from './internal_grn_item.controller';
import { InternalGrnItemService } from './internal_grn_item.service';

describe('InternalGrnItemController', () => {
  let controller: InternalGrnItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternalGrnItemController],
      providers: [
        {
          provide: InternalGrnItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<InternalGrnItemController>(InternalGrnItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
