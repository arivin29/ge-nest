import { Test, TestingModule } from '@nestjs/testing';
import { ContractJenisController } from './contract_jenis.controller';
import { ContractJenisService } from './contract_jenis.service';

describe('ContractJenisController', () => {
  let controller: ContractJenisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractJenisController],
      providers: [
        {
          provide: ContractJenisService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ContractJenisController>(ContractJenisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
