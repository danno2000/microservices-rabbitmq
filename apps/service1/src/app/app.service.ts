import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  @RabbitRPC({
    exchange: 'my_exchange',
    routingKey: 'parent.child',
    // queue: 'my_queue',
  })
  async handleGetUserProfile(payload: any): Promise<any> {
    // Business logic here
    return Promise.resolve({ someting: 'else', service1Timestamp: Date.now() });
  }
}
