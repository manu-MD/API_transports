import { Test, TestingModule } from '@nestjs/testing';
import { VoituresService } from './voitures.service';

describe('VoituresService', () => {
  let service: VoituresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoituresService],
    }).compile();

    service = module.get<VoituresService>(VoituresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
