import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganWorkScheduleBapItemDto {
  @ApiProperty({ required: true })
  idWorkScheduleBapItem: string;

  @ApiProperty({ required: true })
  idWorkScheduleBap: string;

  @ApiProperty({ required: true })
  deskripsiItem: string;

  @ApiProperty({ required: false })
  qty: number;

  @ApiProperty({ required: false })
  satuan: string;

  @ApiProperty({ required: false })
  keterangan: string;

  @ApiProperty({ required: false })
  customFieldJson: string;

  @ApiProperty({ required: false })
  createdAt: string;
}
