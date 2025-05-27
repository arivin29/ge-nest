import { Test, TestingModule } from '@nestjs/testing';
import { MpcJoOperatorService } from './mpc_jo_operator.service';

describe('MpcJoOperatorService', () => {
  let service: MpcJoOperatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpcJoOperatorService],
    }).compile();

    service = module.get<MpcJoOperatorService>(MpcJoOperatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
