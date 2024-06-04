import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestController } from './request/request.controller';

@Module({
  imports: [],
  controllers: [AppController, RequestController],
  providers: [AppService],
})
export class AppModule {}
