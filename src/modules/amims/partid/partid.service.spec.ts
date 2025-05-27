import { Test, TestingModule } from '@nestjs/testing';
import { PartidService } from './partid.service';

describe('PartidService', () => {
  let service: PartidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartidService],
    }).compile();

    service = module.get<PartidService>(PartidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
