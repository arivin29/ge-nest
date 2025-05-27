import { Test, TestingModule } from '@nestjs/testing';
import { FigureIndexService } from './figure_index.service';

describe('FigureIndexService', () => {
  let service: FigureIndexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FigureIndexService],
    }).compile();

    service = module.get<FigureIndexService>(FigureIndexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
