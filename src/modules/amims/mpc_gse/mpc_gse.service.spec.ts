import { Test, TestingModule } from '@nestjs/testing';
import { MpcGseService } from './mpc_gse.service';

describe('MpcGseService', () => {
  let service: MpcGseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpcGseService],
    }).compile();

    service = module.get<MpcGseService>(MpcGseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
