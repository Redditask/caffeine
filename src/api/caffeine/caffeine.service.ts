import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import * as process from 'process';

@Injectable()
export class CaffeineService {
  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async caffeine() {
    const caffeineResult = await this.httpService.axiosRef.get(
      `${process.env.SERVICE_URL}/`,
    );

    if (!!caffeineResult.data) console.log('caffeine successfully completed');
  }
}
