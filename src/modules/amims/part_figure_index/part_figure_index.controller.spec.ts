import { Test, TestingModule } from '@nestjs/testing';
import { PartFigureIndexController } from './part_figure_index.controller';
import { PartFigureIndexService } from './part_figure_index.service';

describe('PartFigureIndexController', () => {
  let controller: PartFigureIndexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartFigureIndexController],
      providers: [
        {
          provide: PartFigureIndexService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartFigureIndexController>(PartFigureIndexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
