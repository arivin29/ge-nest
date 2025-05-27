import { Test, TestingModule } from '@nestjs/testing';
import { EngineerRtiPartWidgetService } from './engineer_rti_part_widget.service';
import { DataSource } from 'typeorm';

describe('EngineerRtiPartWidgetService', () => {
  let service: EngineerRtiPartWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EngineerRtiPartWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<EngineerRtiPartWidgetService>(EngineerRtiPartWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
