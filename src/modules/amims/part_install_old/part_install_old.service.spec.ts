import { Test, TestingModule } from '@nestjs/testing';
import { PartInstallOldService } from './part_install_old.service';

describe('PartInstallOldService', () => {
  let service: PartInstallOldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartInstallOldService],
    }).compile();

    service = module.get<PartInstallOldService>(PartInstallOldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
