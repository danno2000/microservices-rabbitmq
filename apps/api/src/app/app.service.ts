import { Injectable } from '@nestjs/common';
import { getServerStats } from '@massive/server-stats';

@Injectable()
export class AppService {

  getServiceStats() {
    return {
      ...getServerStats(),
      name: 'API Gateway',
      timestamp: Date.now()
    }
  }
}
