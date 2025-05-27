import { Test, TestingModule } from '@nestjs/testing';
import { PartFigureIndexService } from './part_figure_index.service';

describe('PartFigureIndexService', () => {
  let service: PartFigureIndexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartFigureIndexService],
    }).compile();

    service = module.get<PartFigureIndexService>(PartFigureIndexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
