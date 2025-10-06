import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceDocumentService } from './maintenance_document.service';

describe('MaintenanceDocumentService', () => {
  let service: MaintenanceDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceDocumentService],
    }).compile();

    service = module.get<MaintenanceDocumentService>(MaintenanceDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
