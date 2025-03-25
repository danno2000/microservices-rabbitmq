import { Module } from '@nestjs/common';
import { RMQExchangeModule } from '@massive/rabbitmq';

@Module({
  imports: [RMQExchangeModule.register()],
})
export class AppModule {}