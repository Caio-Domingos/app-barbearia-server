import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientBarbersService } from './client-barbers.service';
import { CreateClientBarberDto } from './dto/create-client-barber.dto';
import { UpdateClientBarberDto } from './dto/update-client-barber.dto';

@Controller('client-barbers')
export class ClientBarbersController {
  constructor(private readonly clientBarbersService: ClientBarbersService) {}

  @Post()
  create(@Body() createClientBarberDto: CreateClientBarberDto) {
    return this.clientBarbersService.create(createClientBarberDto);
  }

  @Get()
  findAll() {
    return this.clientBarbersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientBarbersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientBarberDto: UpdateClientBarberDto) {
    return this.clientBarbersService.update(id, updateClientBarberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientBarbersService.remove(id);
  }
}
