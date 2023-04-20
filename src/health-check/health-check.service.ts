import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  public async check() {
    return {
      name: 'Ravenclaw',
      healthy: true,
      version: process.env.npm_package_version,
    };
  }
}
