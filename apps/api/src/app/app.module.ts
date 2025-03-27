import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RMQExchangeModule } from '@massive/rabbitmq'

@Module({
  imports: [ RMQExchangeModule.register() ],
  controllers: [AppController],
  providers: [RMQExchangeModule],
})
export class AppModule {}