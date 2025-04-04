import { Test, TestingModule } from '@nestjs/testing';
import { CompanyConfigService } from './company_config.service';

describe('CompanyConfigService', () => {
  let service: CompanyConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyConfigService],
    }).compile();

    service = module.get<CompanyConfigService>(CompanyConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
