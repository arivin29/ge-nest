import { Test, TestingModule } from '@nestjs/testing';
import { PartInstallOldController } from './part_install_old.controller';
import { PartInstallOldService } from './part_install_old.service';

describe('PartInstallOldController', () => {
  let controller: PartInstallOldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartInstallOldController],
      providers: [
        {
          provide: PartInstallOldService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartInstallOldController>(PartInstallOldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
