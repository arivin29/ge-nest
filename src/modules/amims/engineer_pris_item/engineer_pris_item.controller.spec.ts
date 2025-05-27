import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisItemController } from './engineer_pris_item.controller';
import { EngineerPrisItemService } from './engineer_pris_item.service';

describe('EngineerPrisItemController', () => {
  let controller: EngineerPrisItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerPrisItemController],
      providers: [
        {
          provide: EngineerPrisItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<EngineerPrisItemController>(EngineerPrisItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
