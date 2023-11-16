import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BarberConfigurationsService } from './barber-configurations.service';
import { CreateBarberConfigurationDto } from './dto/create-barber-configuration.dto';
import { UpdateBarberConfigurationDto } from './dto/update-barber-configuration.dto';

@Controller('barber-configurations')
export class BarberConfigurationsController {
  constructor(private readonly barberConfigurationsService: BarberConfigurationsService) {}

  @Post()
  create(@Body() createBarberConfigurationDto: CreateBarberConfigurationDto) {
    return this.barberConfigurationsService.create(createBarberConfigurationDto);
  }

  @Get()
  findAll() {
    return this.barberConfigurationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barberConfigurationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarberConfigurationDto: UpdateBarberConfigurationDto) {
    return this.barberConfigurationsService.update(id, updateBarberConfigurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barberConfigurationsService.remove(id);
  }
}
