import { Test, TestingModule } from '@nestjs/testing';
import { VoituresController } from './voitures.controller';

describe('VoituresController', () => {
  let controller: VoituresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoituresController],
    }).compile();

    controller = module.get<VoituresController>(VoituresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
