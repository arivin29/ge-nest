import { Test, TestingModule } from '@nestjs/testing';
import { ActypeService } from './actype.service';

describe('ActypeService', () => {
  let service: ActypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActypeService],
    }).compile();

    service = module.get<ActypeService>(ActypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
