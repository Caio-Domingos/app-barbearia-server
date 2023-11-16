import { Test, TestingModule } from '@nestjs/testing';
import { BarberConfigurationsController } from './barber-configurations.controller';
import { BarberConfigurationsService } from './barber-configurations.service';

describe('BarberConfigurationsController', () => {
  let controller: BarberConfigurationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarberConfigurationsController],
      providers: [BarberConfigurationsService],
    }).compile();

    controller = module.get<BarberConfigurationsController>(BarberConfigurationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
