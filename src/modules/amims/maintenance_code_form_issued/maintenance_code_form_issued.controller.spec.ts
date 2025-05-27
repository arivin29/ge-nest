import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceCodeFormIssuedController } from './maintenance_code_form_issued.controller';
import { MaintenanceCodeFormIssuedService } from './maintenance_code_form_issued.service';

describe('MaintenanceCodeFormIssuedController', () => {
  let controller: MaintenanceCodeFormIssuedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceCodeFormIssuedController],
      providers: [
        {
          provide: MaintenanceCodeFormIssuedService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceCodeFormIssuedController>(MaintenanceCodeFormIssuedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
