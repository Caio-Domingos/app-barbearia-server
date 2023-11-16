import { Test, TestingModule } from '@nestjs/testing';
import { BarberConfigurationsService } from './barber-configurations.service';

describe('BarberConfigurationsService', () => {
  let service: BarberConfigurationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarberConfigurationsService],
    }).compile();

    service = module.get<BarberConfigurationsService>(BarberConfigurationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
