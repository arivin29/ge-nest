import { Controller, Get } from '@nestjs/common';
import { PerusahaanService } from './perusahaan.service';

@Controller('perusahaan')
export class PerusahaanController {
    constructor(private readonly perusahaanService: PerusahaanService) { }

    @Get()
    async findAll() {
        return this.perusahaanService.findAll();
    }
}
