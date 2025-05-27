import { Test, TestingModule } from '@nestjs/testing';
import { MpcPiroService } from './mpc_piro.service';

describe('MpcPiroService', () => {
  let service: MpcPiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpcPiroService],
    }).compile();

    service = module.get<MpcPiroService>(MpcPiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
