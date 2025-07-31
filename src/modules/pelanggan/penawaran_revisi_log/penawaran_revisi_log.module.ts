import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenawaranRevisiLogService } from './penawaran_revisi_log.service';
import { PenawaranRevisiLogController } from './penawaran_revisi_log.controller';
import { PelangganPenawaranRevisiLog } from 'src/entities/pelanggan';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPenawaranRevisiLog],'pelanggan')],
  controllers: [PenawaranRevisiLogController],
  providers: [PenawaranRevisiLogService],
})
export class PenawaranRevisiLogModule {}
