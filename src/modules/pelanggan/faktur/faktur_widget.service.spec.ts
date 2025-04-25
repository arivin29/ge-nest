import { Test, TestingModule } from '@nestjs/testing';
import { FakturWidgetService } from './faktur_widget.service';
import { DataSource } from 'typeorm';

describe('FakturWidgetService', () => {
  let service: FakturWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FakturWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<FakturWidgetService>(FakturWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
