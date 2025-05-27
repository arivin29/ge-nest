import { Test, TestingModule } from '@nestjs/testing';
import { PartCategoryController } from './part_category.controller';
import { PartCategoryService } from './part_category.service';

describe('PartCategoryController', () => {
  let controller: PartCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartCategoryController],
      providers: [
        {
          provide: PartCategoryService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartCategoryController>(PartCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
