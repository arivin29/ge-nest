import { Test, TestingModule } from '@nestjs/testing';
import { ContractSiteServiceService } from './contract_site_service.service';

describe('ContractSiteServiceService', () => {
  let service: ContractSiteServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractSiteServiceService],
    }).compile();

    service = module.get<ContractSiteServiceService>(ContractSiteServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
