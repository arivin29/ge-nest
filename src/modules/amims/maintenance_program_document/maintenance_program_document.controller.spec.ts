import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceProgramDocumentController } from './maintenance_program_document.controller';
import { MaintenanceProgramDocumentService } from './maintenance_program_document.service';

describe('MaintenanceProgramDocumentController', () => {
  let controller: MaintenanceProgramDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceProgramDocumentController],
      providers: [
        {
          provide: MaintenanceProgramDocumentService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MaintenanceProgramDocumentController>(MaintenanceProgramDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
