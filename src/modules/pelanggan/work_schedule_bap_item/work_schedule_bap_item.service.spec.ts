import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleBapItemService } from './work_schedule_bap_item.service';

describe('WorkScheduleBapItemService', () => {
  let service: WorkScheduleBapItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkScheduleBapItemService],
    }).compile();

    service = module.get<WorkScheduleBapItemService>(WorkScheduleBapItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
