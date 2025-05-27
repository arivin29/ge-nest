import { Test, TestingModule } from '@nestjs/testing';
import { PilotWidgetService } from './pilot_widget.service';
import { DataSource } from 'typeorm';

describe('PilotWidgetService', () => {
  let service: PilotWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PilotWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PilotWidgetService>(PilotWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
