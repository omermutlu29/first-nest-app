import { Module } from '@nestjs/common';
import { WasherService } from './washer.service';
import { WasherController } from './washer.controller';

@Module({
  controllers: [WasherController],
  providers: [WasherService]
})
export class WasherModule {}
