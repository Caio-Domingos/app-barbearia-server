import { Test, TestingModule } from '@nestjs/testing';
import { ClientBarbersService } from './client-barbers.service';

describe('ClientBarbersService', () => {
  let service: ClientBarbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientBarbersService],
    }).compile();

    service = module.get<ClientBarbersService>(ClientBarbersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
