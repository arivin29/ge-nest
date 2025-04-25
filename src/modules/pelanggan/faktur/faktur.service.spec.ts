import { Test, TestingModule } from '@nestjs/testing';
import { FakturService } from './faktur.service';

describe('FakturService', () => {
  let service: FakturService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FakturService],
    }).compile();

    service = module.get<FakturService>(FakturService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
