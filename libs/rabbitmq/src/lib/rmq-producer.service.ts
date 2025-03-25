import { Injectable, Logger } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RMQProducerService {
  private readonly logger = new Logger(RMQProducerService.name);

  constructor(private readonly amqpConnection: AmqpConnection) {}

  async publishMessage(data: any): Promise<void> {
    this.logger.debug(`Publising message`, {data});
    await this.amqpConnection.publish('exchange_name', 'event.route', data);
  }
}