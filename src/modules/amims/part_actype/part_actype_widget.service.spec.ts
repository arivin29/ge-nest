import { Test, TestingModule } from '@nestjs/testing';
import { PartActypeWidgetService } from './part_actype_widget.service';
import { DataSource } from 'typeorm';

describe('PartActypeWidgetService', () => {
  let service: PartActypeWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartActypeWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartActypeWidgetService>(PartActypeWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
