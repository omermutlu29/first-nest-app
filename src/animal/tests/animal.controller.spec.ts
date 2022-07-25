import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from "../controllers/animal.controller";
import { AnimalService } from "../services/animal.service";

describe('AnimalController', () => {
  let controller: AnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalController],
      providers: [AnimalService],
    }).compile();

    controller = module.get<AnimalController>(AnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
