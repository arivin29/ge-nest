import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceCodeService } from './maintenance_code.service';

describe('MaintenanceCodeService', () => {
  let service: MaintenanceCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceCodeService],
    }).compile();

    service = module.get<MaintenanceCodeService>(MaintenanceCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
