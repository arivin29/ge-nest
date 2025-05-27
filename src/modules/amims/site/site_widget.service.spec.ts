import { Test, TestingModule } from '@nestjs/testing';
import { SiteWidgetService } from './site_widget.service';
import { DataSource } from 'typeorm';

describe('SiteWidgetService', () => {
  let service: SiteWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SiteWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<SiteWidgetService>(SiteWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
