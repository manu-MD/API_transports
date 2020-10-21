import { Test, TestingModule } from '@nestjs/testing';
import { BateauxService } from './bateaux.service';

describe('BateauxService', () => {
  let service: BateauxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BateauxService],
    }).compile();

    service = module.get<BateauxService>(BateauxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
