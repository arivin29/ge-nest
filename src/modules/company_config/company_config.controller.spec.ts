import { Test, TestingModule } from '@nestjs/testing';
import { CompanyConfigController } from './company_config.controller';
import { CompanyConfigService } from './company_config.service';

describe('CompanyConfigController', () => {
  let controller: CompanyConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyConfigController],
      providers: [
        {
          provide: CompanyConfigService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CompanyConfigController>(CompanyConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
