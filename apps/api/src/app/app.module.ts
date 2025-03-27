import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RMQExchangeModule } from '@massive/rabbitmq'
import { AppService } from './app.service';

@Module({
  imports: [ RMQExchangeModule.register() ],
  controllers: [AppController],
  providers: [AppService, RMQExchangeModule],
})
export class AppModule {}