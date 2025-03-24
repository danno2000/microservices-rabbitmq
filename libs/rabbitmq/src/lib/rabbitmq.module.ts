import { Module, DynamicModule } from '@nestjs/common';
import { RabbitMQModule as RMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({})
export class RabbitMQModule {
  static register(): DynamicModule {
    return {
      module: RabbitMQModule,
      imports: [
        RMQModule.forRoot({
          exchanges: [
            {
              name: 'exchange_name',
              type: 'topic', // Or 'direct', 'fanout', etc.
            },
          ],
          uri: process.env.RABBITMQ_URI || 'amqp://myuser:mypassword@localhost:5672',
          connectionInitOptions: { wait: false },
        }),
      ],
      exports: [RMQModule],
    };
  }
}