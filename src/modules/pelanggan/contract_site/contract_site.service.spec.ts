import { Test, TestingModule } from '@nestjs/testing';
import { ContractSiteService } from './contract_site.service';

describe('ContractSiteService', () => {
  let service: ContractSiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractSiteService],
    }).compile();

    service = module.get<ContractSiteService>(ContractSiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
