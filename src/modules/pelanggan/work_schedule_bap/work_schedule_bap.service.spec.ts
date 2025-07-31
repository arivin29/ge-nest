import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleBapService } from './work_schedule_bap.service';

describe('WorkScheduleBapService', () => {
  let service: WorkScheduleBapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkScheduleBapService],
    }).compile();

    service = module.get<WorkScheduleBapService>(WorkScheduleBapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
