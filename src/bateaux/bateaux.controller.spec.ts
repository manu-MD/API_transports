import { Test, TestingModule } from '@nestjs/testing';
import { BateauxController } from './bateaux.controller';

describe('BateauxController', () => {
  let controller: BateauxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BateauxController],
    }).compile();

    controller = module.get<BateauxController>(BateauxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
