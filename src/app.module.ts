import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaffeineModule } from './api/caffeine/caffeine.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CaffeineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
