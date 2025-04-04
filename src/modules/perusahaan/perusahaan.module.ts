import { Module } from '@nestjs/common';
import { PerusahaanService } from './perusahaan.service';
import { PerusahaanController } from './perusahaan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perusahaan } from './entities/perusahaan.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Perusahaan])],
    providers: [PerusahaanService],
    controllers: [PerusahaanController],
    exports: [PerusahaanService],
})
export class PerusahaanModule { }
