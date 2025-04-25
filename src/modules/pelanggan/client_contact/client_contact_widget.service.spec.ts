import { Test, TestingModule } from '@nestjs/testing';
import { ClientContactWidgetService } from './client_contact_widget.service';
import { DataSource } from 'typeorm';

describe('ClientContactWidgetService', () => {
  let service: ClientContactWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientContactWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ClientContactWidgetService>(ClientContactWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
