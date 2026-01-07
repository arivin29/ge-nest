import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramItemService } from './maintenance_program_item.service';

describe('MaintenanceProgramItemService', () => {
  let service: MaintenanceProgramItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceProgramItemService],
    }).compile();

    service = module.get<MaintenanceProgramItemService>(MaintenanceProgramItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
