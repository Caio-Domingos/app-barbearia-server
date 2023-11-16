import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientConfigurationsService } from './client-configurations.service';
import { CreateClientConfigurationDto } from './dto/create-client-configuration.dto';
import { UpdateClientConfigurationDto } from './dto/update-client-configuration.dto';

@Controller('client-configurations')
export class ClientConfigurationsController {
  constructor(private readonly clientConfigurationsService: ClientConfigurationsService) {}

  @Post()
  create(@Body() createClientConfigurationDto: CreateClientConfigurationDto) {
    return this.clientConfigurationsService.create(createClientConfigurationDto);
  }

  @Get()
  findAll() {
    return this.clientConfigurationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientConfigurationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientConfigurationDto: UpdateClientConfigurationDto) {
    return this.clientConfigurationsService.update(id, updateClientConfigurationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientConfigurationsService.remove(id);
  }
}
