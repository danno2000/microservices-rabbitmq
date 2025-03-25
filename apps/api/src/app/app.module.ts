import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RMQExchangeModule } from '@massive/rabbitmq'

@Module({
  imports: [ RMQExchangeModule.register() ],
  controllers: [AppController],
  providers: [AppService, RMQExchangeModule],
})
export class AppModule {}


// {
//   uri: process.env.RABBITMQ_URI || 'amqp://localhost:5672',
//   exchanges: [{ name: 'exchange_name', type: 'topic' }],
// }