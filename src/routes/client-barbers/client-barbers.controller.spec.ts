import { Test, TestingModule } from '@nestjs/testing';
import { ClientBarbersController } from './client-barbers.controller';
import { ClientBarbersService } from './client-barbers.service';

describe('ClientBarbersController', () => {
  let controller: ClientBarbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientBarbersController],
      providers: [ClientBarbersService],
    }).compile();

    controller = module.get<ClientBarbersController>(ClientBarbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
