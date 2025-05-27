import { Test, TestingModule } from '@nestjs/testing';
import { TechLogItemController } from './tech_log_item.controller';
import { TechLogItemService } from './tech_log_item.service';

describe('TechLogItemController', () => {
  let controller: TechLogItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechLogItemController],
      providers: [
        {
          provide: TechLogItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TechLogItemController>(TechLogItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
