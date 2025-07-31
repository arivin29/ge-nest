import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenawaranTagService } from './penawaran_tag.service';
import { PenawaranTagController } from './penawaran_tag.controller';
import { PelangganPenawaranTag } from 'src/entities/pelanggan';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPenawaranTag],'pelanggan')],
  controllers: [PenawaranTagController],
  providers: [PenawaranTagService],
})
export class PenawaranTagModule {}
