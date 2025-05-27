import { Test, TestingModule } from '@nestjs/testing';
import { PositionWidgetService } from './position_widget.service';
import { DataSource } from 'typeorm';

describe('PositionWidgetService', () => {
  let service: PositionWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PositionWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PositionWidgetService>(PositionWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
