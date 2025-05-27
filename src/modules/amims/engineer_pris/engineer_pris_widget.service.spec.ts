import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisWidgetService } from './engineer_pris_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerPrisWidgetService', () => {
  let service: EngineerPrisWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerPrisWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerPrisWidgetService>(EngineerPrisWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
