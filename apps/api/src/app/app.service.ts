import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getContainerStats(payload: any): Promise<any> {
    return Promise.resolve({ ...payload, service1Timestamp: Date.now() });
  }
}
