import { Module } from '@nestjs/common';
import { RMQExchangeModule } from '@massive/rabbitmq';
import { AppService } from './app.service';

@Module({
  imports: [RMQExchangeModule.register(/* todo: param overrides */)],
  providers: [AppService]
})
export class AppModule {}