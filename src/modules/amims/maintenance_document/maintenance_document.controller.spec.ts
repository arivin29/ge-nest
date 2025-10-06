import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceDocumentController } from './maintenance_document.controller';
import { MaintenanceDocumentService } from './maintenance_document.service';

describe('MaintenanceDocumentController', () => {
  let controller: MaintenanceDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceDocumentController],
      providers: [
        {
          provide: MaintenanceDocumentService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceDocumentController>(MaintenanceDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
