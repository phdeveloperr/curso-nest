import { Controller, Get } from '@nestjs/common';

import { ConceitosManualService } from './conceitos-manual.service.js';

@Controller('conceitos-manual')
export class ConceitosManualController {

  constructor(
    private readonly conceitosManualService: ConceitosManualService,
  ) {}

  @Get()
  home(): string {

    console.log('🔥 CONCEITOS MANUAL CONTROLLER FOI CHAMADO!');

    return this.conceitosManualService.solucionaHome();
  }
}
