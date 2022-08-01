import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WasherService } from './washer.service';
import { CreateWasherDto } from './dto';

@Controller('washer')
export class WasherController {
  constructor(private readonly washerService: WasherService) {}

  @Post()
  create(@Body() createWasherDto: CreateWasherDto) {
    return this.washerService.create(createWasherDto);
  }

  @Get()
  findAll() {
    return this.washerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.washerService.findOne(+id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateWasherDto: UpdateWasherDto) {
    return this.washerService.update(+id, updateWasherDto);
  }*/

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.washerService.remove(+id);
  }
}
