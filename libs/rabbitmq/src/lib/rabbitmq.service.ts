import { Injectable, Logger } from '@nestjs/common';
import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitMQService {
  private readonly logger = new Logger(RabbitMQService.name);

  @RabbitRPC({
    exchange: 'exchange_name',
    routingKey: 'rpc.route',
    queue: 'rpc_queue',
  })
  async handleRPCRequest(msg: any): Promise<{ response: string }> {
    this.logger.log(`Received RPC request: ${JSON.stringify(msg)}`);
    return { response: `Processed ${JSON.stringify(msg)}` };
  }

  @RabbitSubscribe({
    exchange: 'exchange_name',
    routingKey: 'event.route',
    queue: 'event_queue',
  })
  async handleEvent(msg: any): Promise<void> {
    this.logger.log(`Received event: ${JSON.stringify(msg)}`);
  }
}