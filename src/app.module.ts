import { Module } from '@nestjs/common';
import { UsuarioController } from './Usuario/usuario.controller';
import { UsuarioRepository } from './Usuario/usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class AppModule {}
