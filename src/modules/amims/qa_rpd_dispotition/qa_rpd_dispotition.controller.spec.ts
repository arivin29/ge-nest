import { Test, TestingModule } from '@nestjs/testing';
import { QaRpdDispotitionController } from './qa_rpd_dispotition.controller';
import { QaRpdDispotitionService } from './qa_rpd_dispotition.service';

describe('QaRpdDispotitionController', () => {
  let controller: QaRpdDispotitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QaRpdDispotitionController],
      providers: [
        {
          provide: QaRpdDispotitionService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<QaRpdDispotitionController>(QaRpdDispotitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
