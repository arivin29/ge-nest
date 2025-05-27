import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceCodeFormIssuedService } from './maintenance_code_form_issued.service';

describe('MaintenanceCodeFormIssuedService', () => {
  let service: MaintenanceCodeFormIssuedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceCodeFormIssuedService],
    }).compile();

    service = module.get<MaintenanceCodeFormIssuedService>(MaintenanceCodeFormIssuedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
