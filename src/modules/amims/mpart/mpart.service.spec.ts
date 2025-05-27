import { Test, TestingModule } from '@nestjs/testing';
import { MpartService } from './mpart.service';

describe('MpartService', () => {
  let service: MpartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpartService],
    }).compile();

    service = module.get<MpartService>(MpartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
