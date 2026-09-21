import { Module } from '@nestjs/common';
import { ConceitosAutomaticoController } from './conceitos-automatico.controller.js';

console.log('🔥 CONCEITOS AUTOMATICO MODULE CARREGADO');

@Module({
  controllers: [ConceitosAutomaticoController],
})
export class ConceitosAutomaticoModule {}
