import { Module } from '@nestjs/common';
import { CaffeineService } from './caffeine.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  providers: [CaffeineService],
})
export class CaffeineModule {}
