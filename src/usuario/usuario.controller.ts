import { Body, Controller, Get, Post } from '@nestjs/common';
import type { UsuarioService } from './usuario.service';
import type { Usuario } from './usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('listar')
  async listar(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }

  @Post('cadastrar')
  async cadastrar(@Body() data): Promise<any> {
    return <any>{
      mensagem: 'Salvou',
    };
  }
}
