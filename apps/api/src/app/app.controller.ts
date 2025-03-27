import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
// import { RMQExchangeModule } from '@massive/rabbitmq';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  
  constructor(private readonly amqp: AmqpConnection) {}

  @Post()
  async publishMessage(@Body() {payload, services}: any) {
    try {
      let response = {...payload, apiTimestamp: Date.now()};

      if (services.service1) {
        response = await this.amqp.request({
          exchange: 'my_exchange',
          routingKey: 'services.service1',
          payload: response,
          timeout: 5000,
        });
      }

      if (services.service2) {
        response = await this.amqp.request({
          exchange: 'my_exchange',
          routingKey: 'services.service2',
          payload: response,
          timeout: 5000,
        });
      }


    
    return {
      status: 'OK',
      code: 200,
      data: response,
    };

  } catch (e: any) {
    this.logger.error(e.message);
    return {error: e.message};
  }
  }
}
