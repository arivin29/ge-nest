import { Test, TestingModule } from '@nestjs/testing';
import { MpcWpService } from './mpc_wp.service';

describe('MpcWpService', () => {
  let service: MpcWpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MpcWpService],
    }).compile();

    service = module.get<MpcWpService>(MpcWpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
