import { Test, TestingModule } from '@nestjs/testing';
import { LifeTimeLimitWidgetService } from './life_time_limit_widget.service';
import { DataSource } from 'typeorm';

describe('LifeTimeLimitWidgetService', () => {
  let service: LifeTimeLimitWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LifeTimeLimitWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<LifeTimeLimitWidgetService>(LifeTimeLimitWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
