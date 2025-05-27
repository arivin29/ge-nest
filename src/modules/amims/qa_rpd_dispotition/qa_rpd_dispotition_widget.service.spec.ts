import { Test, TestingModule } from '@nestjs/testing';
import { QaRpdDispotitionWidgetService } from './qa_rpd_dispotition_widget.service';
import { DataSource } from 'typeorm';

describe('QaRpdDispotitionWidgetService', () => {
  let service: QaRpdDispotitionWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QaRpdDispotitionWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<QaRpdDispotitionWidgetService>(QaRpdDispotitionWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
