import { Test, TestingModule } from '@nestjs/testing';
import { TechDefectController } from './tech_defect.controller';
import { TechDefectService } from './tech_defect.service';

describe('TechDefectController', () => {
  let controller: TechDefectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechDefectController],
      providers: [
        {
          provide: TechDefectService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TechDefectController>(TechDefectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
