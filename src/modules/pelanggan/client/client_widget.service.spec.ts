import { Test, TestingModule } from '@nestjs/testing';
import { ClientWidgetService } from './client_widget.service';
import { DataSource } from 'typeorm';

describe('ClientWidgetService', () => {
  let service: ClientWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ClientWidgetService>(ClientWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
