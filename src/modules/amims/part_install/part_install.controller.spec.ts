import { Test, TestingModule } from '@nestjs/testing';
import { PartInstallController } from './part_install.controller';
import { PartInstallService } from './part_install.service';

describe('PartInstallController', () => {
  let controller: PartInstallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartInstallController],
      providers: [
        {
          provide: PartInstallService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PartInstallController>(PartInstallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
