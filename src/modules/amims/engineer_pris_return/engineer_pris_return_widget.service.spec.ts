import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisReturnWidgetService } from './engineer_pris_return_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerPrisReturnWidgetService', () => {
  let service: EngineerPrisReturnWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerPrisReturnWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerPrisReturnWidgetService>(EngineerPrisReturnWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
