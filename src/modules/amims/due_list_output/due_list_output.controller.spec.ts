import { Test, TestingModule } from '@nestjs/testing';
import { DueListOutputController } from './due_list_output.controller';
import { DueListOutputService } from './due_list_output.service';

describe('DueListOutputController', () => {
  let controller: DueListOutputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DueListOutputController],
      providers: [
        {
          provide: DueListOutputService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<DueListOutputController>(DueListOutputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
