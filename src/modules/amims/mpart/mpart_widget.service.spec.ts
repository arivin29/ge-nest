import { Test, TestingModule } from '@nestjs/testing';
import { MpartWidgetService } from './mpart_widget.service';
import { DataSource } from 'typeorm';

describe('MpartWidgetService', () => {
  let service: MpartWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MpartWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<MpartWidgetService>(MpartWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
