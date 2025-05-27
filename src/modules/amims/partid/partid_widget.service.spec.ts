import { Test, TestingModule } from '@nestjs/testing';
import { PartidWidgetService } from './partid_widget.service';
import { DataSource } from 'typeorm';

describe('PartidWidgetService', () => {
  let service: PartidWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PartidWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PartidWidgetService>(PartidWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
