import { Test, TestingModule } from '@nestjs/testing';
import { WpWidgetService } from './wp_widget.service';
import { DataSource } from 'typeorm';

describe('WpWidgetService', () => {
  let service: WpWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WpWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<WpWidgetService>(WpWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
