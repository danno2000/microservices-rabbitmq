import { Module, DynamicModule } from '@nestjs/common';
import { RabbitMQModule as RMQModule } from '@golevelup/nestjs-rabbitmq';
// import { RMQProducer } from './rmq-producer.service';

@Module({})
export class RMQExchangeModule {
  static register(): DynamicModule {
    return {
      module: RMQExchangeModule,
      imports: [
        RMQModule.forRoot({
          exchanges: [{ name: 'exchange_name', type: 'topic' }],
          uri: process.env.RABBITMQ_URI || 'amqp://myuser:mypassword@localhost:5672',
          connectionInitOptions: { wait: false },
        }),
      ],
      // providers: [RMQProducer],
      exports: [RMQModule],
    };
  }
}