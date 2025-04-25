import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleTeknisiService } from './work_schedule_teknisi.service';

describe('WorkScheduleTeknisiService', () => {
  let service: WorkScheduleTeknisiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkScheduleTeknisiService],
    }).compile();

    service = module.get<WorkScheduleTeknisiService>(WorkScheduleTeknisiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
