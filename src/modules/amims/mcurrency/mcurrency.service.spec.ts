import { Test, TestingModule } from '@nestjs/testing';
import { McurrencyService } from './mcurrency.service';

describe('McurrencyService', () => {
  let service: McurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [McurrencyService],
    }).compile();

    service = module.get<McurrencyService>(McurrencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
