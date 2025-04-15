import { Module, DynamicModule } from '@nestjs/common';
import { RabbitMQConfig, RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import deepmerge from 'deepmerge';
import dotenv from 'dotenv';
dotenv.config();

const { RABBITMQ_HOST, RABBITMQ_PORT, RABBITMQ_USER, RABBITMQ_PASS } =
  process.env;

@Module({})
export class RMQExchangeModule {
  static register(options?: RabbitMQConfig): DynamicModule {
    const config = deepmerge(
      {
        exchanges: [{ name: 'my_exchange', type: 'topic' }],
        uri: `amqp://${RABBITMQ_USER}:${RABBITMQ_PASS}@${RABBITMQ_HOST}:${RABBITMQ_PORT}`,
        connectionInitOptions: { wait: true },
      },
      options ?? {}
    );

    return {
      module: RMQExchangeModule,
      imports: [RabbitMQModule.forRoot(config)],
      exports: [RabbitMQModule],
    };
  }
}
