import { Controller, Post } from '@nestjs/common';
import { UrlService } from './url.service';
import * as crypto from 'crypto';

@Controller()
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post()
  async createNewShortenUrl() {
    return this.urlService.createNewShortenUrl('hello');
  }
}
