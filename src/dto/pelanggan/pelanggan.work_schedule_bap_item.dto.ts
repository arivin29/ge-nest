import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganWorkScheduleBapItemDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  customFieldJson: string;

  @ApiProperty({ required: true })
  deskripsiItem: string;

  @ApiProperty({ required: true })
  idWorkScheduleBap: string;

  @ApiProperty({ required: true })
  idWorkScheduleBapItem: string;

  @ApiProperty({ required: false })
  keterangan: string;

  @ApiProperty({ required: false })
  qty: number;

  @ApiProperty({ required: false })
  satuan: string;
}
