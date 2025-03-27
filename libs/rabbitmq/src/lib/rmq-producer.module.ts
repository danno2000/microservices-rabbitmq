import { Module, DynamicModule } from '@nestjs/common';
// import { RabbitMQModule as RMQModule } from '@golevelup/nestjs-rabbitmq';
import { RMQProducerService } from './rmq-producer.service';
import { RMQExchangeModule } from './rmq-exchange.module';

@Module({})
export class RMQProducerModule {
  static register(): DynamicModule {
    return {
      module: RMQProducerModule,
      imports: [RMQExchangeModule.register(/* todo: param overrides */)],
      providers: [RMQProducerService],
      exports: [RMQProducerService],
    };
  }
}