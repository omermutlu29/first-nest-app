import { Injectable } from '@nestjs/common';
import { CreateWasherDto } from "./dto";

@Injectable()
export class WasherService {
  create(createWasherDto: CreateWasherDto) {
    return 'This action adds a new washer';
  }

  findAll() {
    return `This action returns all washer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} washer`;
  }

  remove(id: number) {
    return `This action removes a #${id} washer`;
  }
}
