import { Test, TestingModule } from '@nestjs/testing';
import { DueListController } from './due_list.controller';
import { DueListService } from './due_list.service';

describe('DueListController', () => {
  let controller: DueListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DueListController],
      providers: [
        {
          provide: DueListService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<DueListController>(DueListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
