import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQProducer } from '@massive/rabbitmq';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  
  constructor(private readonly appService: AppService, private readonly rabbitMQProducer: RabbitMQProducer) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  
  @Post()
  async publishMessage(@Body() data: any) {
    this.logger.log('GOT HERE!!')
    await this.rabbitMQProducer.publishMessage(data);
    return {
      status: 'OK',
      code: 200,
      data
    };
  }
}
