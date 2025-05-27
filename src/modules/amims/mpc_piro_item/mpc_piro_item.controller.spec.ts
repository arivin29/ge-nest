import { Test, TestingModule } from '@nestjs/testing';
import { MpcPiroItemController } from './mpc_piro_item.controller';
import { MpcPiroItemService } from './mpc_piro_item.service';

describe('MpcPiroItemController', () => {
  let controller: MpcPiroItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MpcPiroItemController],
      providers: [
        {
          provide: MpcPiroItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MpcPiroItemController>(MpcPiroItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
