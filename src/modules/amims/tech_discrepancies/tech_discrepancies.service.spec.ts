import { Test, TestingModule } from '@nestjs/testing';
import { TechDiscrepanciesService } from './tech_discrepancies.service';

describe('TechDiscrepanciesService', () => {
  let service: TechDiscrepanciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechDiscrepanciesService],
    }).compile();

    service = module.get<TechDiscrepanciesService>(TechDiscrepanciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
