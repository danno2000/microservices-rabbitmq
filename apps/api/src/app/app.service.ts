import { Injectable, Logger } from '@nestjs/common';
import { getServerStats } from '@massive/server-stats';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly amqp: AmqpConnection) {}

  async addServiceStamps(payload: any, services: any) {
    try {
      let data = { ...payload, apiBits: this.getServiceStats() };

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

      return { data };
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : err;
      this.logger.error(error);
      return { error };
    }
  }

  getServiceStats() {
    return {
      ...getServerStats(),
      name: 'API Gateway',
      timestamp: Date.now(),
    };
  }
}
