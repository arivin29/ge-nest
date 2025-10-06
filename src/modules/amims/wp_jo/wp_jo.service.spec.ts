import { Test, TestingModule } from '@nestjs/testing';
import { WpJoService } from './wp_jo.service';

describe('WpJoService', () => {
  let service: WpJoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WpJoService],
    }).compile();

    service = module.get<WpJoService>(WpJoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
