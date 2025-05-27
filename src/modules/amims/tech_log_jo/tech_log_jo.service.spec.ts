import { Test, TestingModule } from '@nestjs/testing';
import { TechLogJoService } from './tech_log_jo.service';

describe('TechLogJoService', () => {
  let service: TechLogJoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechLogJoService],
    }).compile();

    service = module.get<TechLogJoService>(TechLogJoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
