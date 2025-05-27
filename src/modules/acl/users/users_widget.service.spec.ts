import { Test, TestingModule } from '@nestjs/testing';
import { UsersWidgetService } from './users_widget.service';
import { DataSource } from 'typeorm';

describe('UsersWidgetService', () => {
  let service: UsersWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<UsersWidgetService>(UsersWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
