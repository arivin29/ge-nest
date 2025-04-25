import { Test, TestingModule } from '@nestjs/testing';
import { ContactClientUseWidgetService } from './contact_client_use_widget.service';
import { DataSource } from 'typeorm';

describe('ContactClientUseWidgetService', () => {
  let service: ContactClientUseWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactClientUseWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ContactClientUseWidgetService>(ContactClientUseWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
