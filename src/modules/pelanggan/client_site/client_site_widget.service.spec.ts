import { Test, TestingModule } from '@nestjs/testing';
import { ClientSiteWidgetService } from './client_site_widget.service';
import { DataSource } from 'typeorm';

describe('ClientSiteWidgetService', () => {
  let service: ClientSiteWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientSiteWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<ClientSiteWidgetService>(ClientSiteWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
