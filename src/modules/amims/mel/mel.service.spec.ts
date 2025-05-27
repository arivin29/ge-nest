import { Test, TestingModule } from '@nestjs/testing';
import { MelService } from './mel.service';

describe('MelService', () => {
  let service: MelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MelService],
    }).compile();

    service = module.get<MelService>(MelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
