import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RMQExchangeModule } from '@massive/rabbitmq';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';

@Module({
  imports: [RMQExchangeModule.register(/* todo: param overrides */)],
  controllers: [AppController],
  providers: [AppService, RMQExchangeModule, AppGateway],
})
export class AppModule {}
