import { Test, TestingModule } from '@nestjs/testing';
import { AtaService } from './ata.service';

describe('AtaService', () => {
  let service: AtaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtaService],
    }).compile();

    service = module.get<AtaService>(AtaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
