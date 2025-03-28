import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { getServerStats } from '@massive/server-stats';

@Injectable()
export class AppService {

  @RabbitRPC({
    exchange: 'my_exchange',
    routingKey: 'services.service2',
  })
  async handleRpcRequest(payload: any): Promise<any> {
    return Promise.resolve({ ...payload, service2Bits: this.getServiceStats() });
  }

  getServiceStats() {
    return {
      ...getServerStats(),
      name: 'Microservice 2',
      timestamp: Date.now()
    }
  };
}
