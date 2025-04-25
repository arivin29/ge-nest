import { Test, TestingModule } from '@nestjs/testing';
import { KantorWidgetService } from './kantor_widget.service';
import { DataSource } from 'typeorm';

describe('KantorWidgetService', () => {
  let service: KantorWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KantorWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<KantorWidgetService>(KantorWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
