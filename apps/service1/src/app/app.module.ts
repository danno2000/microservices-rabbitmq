import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@massive/rabbitmq';

@Module({
  imports: [RabbitMQModule.register()],
})
export class AppModule {}