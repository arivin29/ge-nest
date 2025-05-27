import { Test, TestingModule } from '@nestjs/testing';
import { MpcJoService } from './mpc_jo.service';

describe('MpcJoService', () => {
  let service: MpcJoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpcJoService],
    }).compile();

    service = module.get<MpcJoService>(MpcJoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
