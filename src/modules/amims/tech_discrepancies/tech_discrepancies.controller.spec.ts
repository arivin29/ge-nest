import { Test, TestingModule } from '@nestjs/testing';
import { TechDiscrepanciesController } from './tech_discrepancies.controller';
import { TechDiscrepanciesService } from './tech_discrepancies.service';

describe('TechDiscrepanciesController', () => {
  let controller: TechDiscrepanciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechDiscrepanciesController],
      providers: [
        {
          provide: TechDiscrepanciesService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TechDiscrepanciesController>(TechDiscrepanciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
