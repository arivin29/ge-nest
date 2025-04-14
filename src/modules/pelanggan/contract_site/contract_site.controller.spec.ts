import { Test, TestingModule } from '@nestjs/testing';
import { ContractSiteController } from './contract_site.controller';
import { ContractSiteService } from './contract_site.service';

describe('ContractSiteController', () => {
  let controller: ContractSiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractSiteController],
      providers: [
        {
          provide: ContractSiteService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ContractSiteController>(ContractSiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
