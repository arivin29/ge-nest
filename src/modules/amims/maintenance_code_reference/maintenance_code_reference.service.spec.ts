import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceCodeReferenceService } from './maintenance_code_reference.service';

describe('MaintenanceCodeReferenceService', () => {
  let service: MaintenanceCodeReferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceCodeReferenceService],
    }).compile();

    service = module.get<MaintenanceCodeReferenceService>(MaintenanceCodeReferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
