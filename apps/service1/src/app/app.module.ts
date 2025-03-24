import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@massive/rabbitmq';

@Module({
  imports: [RabbitMQModule],
})
export class AppModule {}