import { Test, TestingModule } from '@nestjs/testing';
import { CamionsController } from './camions.controller';

describe('CamionsController', () => {
  let controller: CamionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CamionsController],
    }).compile();

    controller = module.get<CamionsController>(CamionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
