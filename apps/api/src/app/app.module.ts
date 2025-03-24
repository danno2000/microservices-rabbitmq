import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@massive/rabbitmq'

@Module({
  imports: [ RabbitMQModule.register() ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// {
//   uri: process.env.RABBITMQ_URI || 'amqp://localhost:5672',
//   exchanges: [{ name: 'exchange_name', type: 'topic' }],
// }