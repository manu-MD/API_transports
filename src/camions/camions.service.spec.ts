import { Test, TestingModule } from '@nestjs/testing';
import { CamionsService } from './camions.service';

describe('CamionsService', () => {
  let service: CamionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CamionsService],
    }).compile();

    service = module.get<CamionsService>(CamionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
