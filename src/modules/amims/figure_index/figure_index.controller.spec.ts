import { Test, TestingModule } from '@nestjs/testing';
import { FigureIndexController } from './figure_index.controller';
import { FigureIndexService } from './figure_index.service';

describe('FigureIndexController', () => {
  let controller: FigureIndexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FigureIndexController],
      providers: [
        {
          provide: FigureIndexService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<FigureIndexController>(FigureIndexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
