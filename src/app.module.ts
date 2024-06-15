import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioRepository } from './usuario/usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class AppModule {}
