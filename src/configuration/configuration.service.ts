import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(protected readonly cfg: ConfigService) {}

  public get dbUri(): string {
    return this.cfg.get<string>('MONGO_URI');
  }
}
