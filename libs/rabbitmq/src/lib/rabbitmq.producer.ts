import { Injectable, Logger } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitMQProducer {
  private readonly logger = new Logger(RabbitMQProducer.name);

  constructor(private readonly amqpConnection: AmqpConnection) {}

  // @RabbitRPC({
  //   exchange: 'exchange_name',
  //   routingKey: 'rpc.route',
  //   queue: 'rpc_queue',
  // })
  // async handleRPCRequest(msg: any): Promise<{ response: string }> {
  //   this.logger.log(`Received RPC request: ${JSON.stringify(msg)}`);
  //   return { response: `Processed ${JSON.stringify(msg)}` };
  // }

  // @RabbitSubscribe({
  //   exchange: 'exchange_name',
  //   routingKey: 'event.route',
  //   queue: 'event_queue',
  // })
  // async handleEvent(msg: any): Promise<void> {
  //   this.logger.log(`Received event: ${JSON.stringify(msg)}`);
  // }

  async publishMessage(data: any): Promise<void> {
    this.logger.debug(`Publising message`, {data});
    await this.amqpConnection.publish('exchange_name', 'event.route', data);
  }
}