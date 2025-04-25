import { Test, TestingModule } from '@nestjs/testing';
import { TeknisiService } from './teknisi.service';

describe('TeknisiService', () => {
  let service: TeknisiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeknisiService],
    }).compile();

    service = module.get<TeknisiService>(TeknisiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
