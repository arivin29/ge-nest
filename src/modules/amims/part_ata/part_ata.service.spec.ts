import { Test, TestingModule } from '@nestjs/testing';
import { PartAtaService } from './part_ata.service';

describe('PartAtaService', () => {
  let service: PartAtaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartAtaService],
    }).compile();

    service = module.get<PartAtaService>(PartAtaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
