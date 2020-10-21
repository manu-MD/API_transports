import { Test, TestingModule } from '@nestjs/testing';
import { AvionsService } from './avions.service';

describe('AvionsService', () => {
  let service: AvionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvionsService],
    }).compile();

    service = module.get<AvionsService>(AvionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
