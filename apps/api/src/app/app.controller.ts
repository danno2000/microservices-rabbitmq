import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Post()
  async publishMessage(@Body() { payload, services }: any) {
    try {
      return this.appService.addServiceStamps(payload, services);
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : err;
      this.logger.error(error);
      return { error };
    }
  }
}
