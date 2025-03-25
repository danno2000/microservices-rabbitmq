import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { RMQExchangeModule } from '@massive/rabbitmq';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  
  constructor(private readonly appService: AppService, private readonly amqp: AmqpConnection) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  
  @Post()
  async publishMessage(@Body() data: any) {
    try {
    const response = await this.amqp.request({
      exchange: 'my_exchange',
      routingKey: 'parent.child',
      payload: { userId: 0 },
      timeout: 5000,
    });

    // await this.rmqProducer.publishMessage(data);
    
    return {
      status: 'OK',
      code: 200,
      data,
      response
    };

  } catch (e: any) {
    this.logger.error(e.message);
    // throw e;
  }
  }
}
