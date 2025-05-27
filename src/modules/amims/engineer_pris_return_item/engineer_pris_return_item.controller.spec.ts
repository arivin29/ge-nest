import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisReturnItemController } from './engineer_pris_return_item.controller';
import { EngineerPrisReturnItemService } from './engineer_pris_return_item.service';

describe('EngineerPrisReturnItemController', () => {
  let controller: EngineerPrisReturnItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerPrisReturnItemController],
      providers: [
        {
          provide: EngineerPrisReturnItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerPrisReturnItemController>(EngineerPrisReturnItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
