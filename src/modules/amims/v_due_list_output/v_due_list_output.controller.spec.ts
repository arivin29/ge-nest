import { Test, TestingModule } from '@nestjs/testing';
import { VDueListOutputController } from './v_due_list_output.controller';
import { VDueListOutputService } from './v_due_list_output.service';

describe('VDueListOutputController', () => {
  let controller: VDueListOutputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VDueListOutputController],
      providers: [
        {
          provide: VDueListOutputService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<VDueListOutputController>(VDueListOutputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
