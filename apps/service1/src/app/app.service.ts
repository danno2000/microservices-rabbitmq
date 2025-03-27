import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  @RabbitRPC({
    exchange: 'my_exchange',
    routingKey: 'services.service1',
  })
  async handleGetUserProfile(payload: any): Promise<any> {
    return Promise.resolve({ ...payload, service1Timestamp: Date.now() });
  }
}
