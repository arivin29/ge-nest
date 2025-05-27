import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceCodeReferenceController } from './maintenance_code_reference.controller';
import { MaintenanceCodeReferenceService } from './maintenance_code_reference.service';

describe('MaintenanceCodeReferenceController', () => {
  let controller: MaintenanceCodeReferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceCodeReferenceController],
      providers: [
        {
          provide: MaintenanceCodeReferenceService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceCodeReferenceController>(MaintenanceCodeReferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
