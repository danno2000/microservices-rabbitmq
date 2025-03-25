import { Module, DynamicModule } from '@nestjs/common';
// import { RabbitMQModule as RMQModule } from '@golevelup/nestjs-rabbitmq';
import { RMQConsumerService } from './rmq-consumer.service';
import { RMQExchangeModule } from './rmq-exchange.module';

@Module({})
export class RMQProducerModule {
  static register(): DynamicModule {
    return {
      module: RMQProducerModule,
      imports: [RMQExchangeModule.register()],
      providers: [RMQConsumerService],
      exports: [RMQConsumerService],
    };
  }
}