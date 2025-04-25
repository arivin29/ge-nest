import { Test, TestingModule } from '@nestjs/testing';
import { ServiceWidgetService } from './service_widget.service';
import { DataSource } from 'typeorm';

describe('ServiceWidgetService', () => {
  let service: ServiceWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiceWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ServiceWidgetService>(ServiceWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
