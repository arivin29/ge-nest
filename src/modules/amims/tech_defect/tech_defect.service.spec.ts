import { Test, TestingModule } from '@nestjs/testing';
import { TechDefectService } from './tech_defect.service';

describe('TechDefectService', () => {
  let service: TechDefectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechDefectService],
    }).compile();

    service = module.get<TechDefectService>(TechDefectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
