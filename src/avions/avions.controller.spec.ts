import { Test, TestingModule } from '@nestjs/testing';
import { AvionsController } from './avions.controller';

describe('AvionsController', () => {
  let controller: AvionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvionsController],
    }).compile();

    controller = module.get<AvionsController>(AvionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
