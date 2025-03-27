import { Module, DynamicModule } from '@nestjs/common';
import { RabbitMQModule as RMQModule } from '@golevelup/nestjs-rabbitmq';
import dotenv from 'dotenv';
dotenv.config();

const {
  RABBITMQ_HOST,
  RABBITMQ_PORT,
  RABBITMQ_USER,
  RABBITMQ_PASS,
} = process.env;

@Module({})
export class RMQExchangeModule {
  static register(): DynamicModule {
    return {
      module: RMQExchangeModule,
      imports: [
        RMQModule.forRoot({
          exchanges: [{ name: 'my_exchange', type: 'topic' }],
          uri: `amqp://${RABBITMQ_USER}:${RABBITMQ_PASS}@${RABBITMQ_HOST}:${RABBITMQ_PORT}`,
          connectionInitOptions: { wait: true },
        }),
      ],
      // providers: [RMQProducer],
      exports: [RMQModule],
    };
  }
}