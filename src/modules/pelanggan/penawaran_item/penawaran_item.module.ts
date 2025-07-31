import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenawaranItemService } from './penawaran_item.service';
import { PenawaranItemController } from './penawaran_item.controller';
import { PelangganPenawaranItem } from 'src/entities/pelanggan';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPenawaranItem],'pelanggan')],
  controllers: [PenawaranItemController],
  providers: [PenawaranItemService],
})
export class PenawaranItemModule {}
