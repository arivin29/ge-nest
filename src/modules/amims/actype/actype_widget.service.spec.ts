import { Test, TestingModule } from '@nestjs/testing';
import { ActypeWidgetService } from './actype_widget.service';
import { DataSource } from 'typeorm';

describe('ActypeWidgetService', () => {
  let service: ActypeWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActypeWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ActypeWidgetService>(ActypeWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
