import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  
  constructor(private readonly appService: AppService, private readonly amqp: AmqpConnection) {}

  // todo: move the execution verbosity to the service side of this module
  // and keep the controller very high-level for maximum readability.

  @Post()
  async publishMessage(@Body() {payload, services}: any) {
    try {
      let data = {...payload, apiBits: this.appService.getServiceStats()};

      if (services.service1) {
        data = await this.amqp.request({
          exchange: 'my_exchange',
          routingKey: 'services.service1',
          payload: data,
          timeout: 5000,
        });
      }

      if (services.service2) {
        data = await this.amqp.request({
          exchange: 'my_exchange',
          routingKey: 'services.service2',
          payload: data,
          timeout: 5000,
        });
      }
    
      // todo: research NestJS' success & error
      // codes best practices.
      return { data };

    } catch (e: any) {
      this.logger.error(e.message);
      return {error: e.message};
    }
  }
}
