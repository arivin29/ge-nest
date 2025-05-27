import { Test, TestingModule } from '@nestjs/testing';
import { QaRpdDispotitionService } from './qa_rpd_dispotition.service';

describe('QaRpdDispotitionService', () => {
  let service: QaRpdDispotitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QaRpdDispotitionService],
    }).compile();

    service = module.get<QaRpdDispotitionService>(QaRpdDispotitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
