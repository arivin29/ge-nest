import { Test, TestingModule } from '@nestjs/testing';
import { PartAtaWidgetService } from './part_ata_widget.service';
import { DataSource } from 'typeorm';

describe('PartAtaWidgetService', () => {
  let service: PartAtaWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartAtaWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartAtaWidgetService>(PartAtaWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
