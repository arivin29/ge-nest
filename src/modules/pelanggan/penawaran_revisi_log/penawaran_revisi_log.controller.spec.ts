import { Test, TestingModule } from '@nestjs/testing';
import { PenawaranRevisiLogController } from './penawaran_revisi_log.controller';
import { PenawaranRevisiLogService } from './penawaran_revisi_log.service';

describe('PenawaranRevisiLogController', () => {
  let controller: PenawaranRevisiLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenawaranRevisiLogController],
      providers: [
        {
          provide: PenawaranRevisiLogService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PenawaranRevisiLogController>(PenawaranRevisiLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
