import { Test, TestingModule } from '@nestjs/testing';
import { QaRpdController } from './qa_rpd.controller';
import { QaRpdService } from './qa_rpd.service';

describe('QaRpdController', () => {
  let controller: QaRpdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QaRpdController],
      providers: [
        {
          provide: QaRpdService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<QaRpdController>(QaRpdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
