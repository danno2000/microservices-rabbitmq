import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RMQExchangeModule } from '@massive/rabbitmq'
import { AppService } from './app.service';
import { EventsGateway } from './events.gateway';

@Module({
  imports: [ RMQExchangeModule.register(/* todo: param overrides */) ],
  controllers: [AppController],
  providers: [AppService, RMQExchangeModule, EventsGateway],
})
export class AppModule {}