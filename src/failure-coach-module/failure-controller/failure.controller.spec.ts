import { Test, TestingModule } from '@nestjs/testing';
import { FailureController } from './failure.controller';

describe('FailureController', () => {
  let controller: FailureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FailureController],
    }).compile();

    controller = module.get<FailureController>(FailureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
