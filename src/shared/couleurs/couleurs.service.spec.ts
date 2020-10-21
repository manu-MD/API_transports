import { Test, TestingModule } from '@nestjs/testing';
import { CouleursService } from './couleurs.service';

describe('CouleursService', () => {
  let service: CouleursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouleursService],
    }).compile();

    service = module.get<CouleursService>(CouleursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
