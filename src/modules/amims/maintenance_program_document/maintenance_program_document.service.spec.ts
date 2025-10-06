import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramDocumentService } from './maintenance_program_document.service';

describe('MaintenanceProgramDocumentService', () => {
  let service: MaintenanceProgramDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceProgramDocumentService],
    }).compile();

    service = module.get<MaintenanceProgramDocumentService>(MaintenanceProgramDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
