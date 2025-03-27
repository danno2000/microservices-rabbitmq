import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { getServerStats } from '@massive/server-stats';

@Injectable()
export class AppService {

  @RabbitRPC({
    exchange: 'my_exchange',
    routingKey: 'services.service1',
  })
  async handleGetUserProfile(payload: any): Promise<any> {
    return Promise.resolve({ ...payload, service1Bits: this.getServiceStats() });
  }

  getServiceStats() {
    return {
      ...getServerStats(),
      name: 'Microservice 1',
      timestamp: Date.now()
    }
  }
}
