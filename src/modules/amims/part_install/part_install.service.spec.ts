import { Test, TestingModule } from '@nestjs/testing';
import { PartInstallService } from './part_install.service';

describe('PartInstallService', () => {
  let service: PartInstallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartInstallService],
    }).compile();

    service = module.get<PartInstallService>(PartInstallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
