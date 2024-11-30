import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello TESTE!';
  }

  getObject(): any {
    const object = {
      id: 1,
      nome: "Vinicius"
    }
    return object
  }
}
