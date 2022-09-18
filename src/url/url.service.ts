import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class UrlService {
  async createNewShortenUrl(url: string): Promise<string> {
    const hashedUrl = await this.hashingUrl(url);
    const shortenUrl = await this.makeShortenUrl(hashedUrl);
    return shortenUrl;
  }

  async hashingUrl(url: string) {
    return crypto.createHash('md5').update(url).digest('base64');
  }

  async makeShortenUrl(hashedUrl: string) {
    return hashedUrl.slice(0, 10);
  }
}
