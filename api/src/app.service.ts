import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const msg = process.env.HOGE;
    return msg;
  }
}
