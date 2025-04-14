import { Test, TestingModule } from '@nestjs/testing';
import { ContractJenisService } from './contract_jenis.service';

describe('ContractJenisService', () => {
  let service: ContractJenisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractJenisService],
    }).compile();

    service = module.get<ContractJenisService>(ContractJenisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
