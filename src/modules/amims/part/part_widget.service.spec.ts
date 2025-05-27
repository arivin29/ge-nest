import { Test, TestingModule } from '@nestjs/testing';
import { PartWidgetService } from './part_widget.service';
import { DataSource } from 'typeorm';

describe('PartWidgetService', () => {
  let service: PartWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartWidgetService>(PartWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
