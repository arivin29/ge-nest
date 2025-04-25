import { Test, TestingModule } from '@nestjs/testing';
import { ContractSiteServiceController } from './contract_site_service.controller';
import { ContractSiteServiceService } from './contract_site_service.service';

describe('ContractSiteServiceController', () => {
  let controller: ContractSiteServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractSiteServiceController],
      providers: [
        {
          provide: ContractSiteServiceService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ContractSiteServiceController>(ContractSiteServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
