import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganPenawaranItemDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  deskripsiItem: string;

  @ApiProperty({ required: false })
  diskonNominal: number;

  @ApiProperty({ required: false })
  diskonPersen: number;

  @ApiProperty({ required: false })
  hargaBatasMinimum: number;

  @ApiProperty({ required: false })
  hargaDeal: number;

  @ApiProperty({ required: false })
  hargaModal: number;

  @ApiProperty({ required: false })
  hargaTawaran: number;

  @ApiProperty({ required: true })
  idPenawaran: string;

  @ApiProperty({ required: true })
  idPenawaranItem: string;

  @ApiProperty({ required: false })
  idService: string;

  @ApiProperty({ required: true })
  namaItem: string;

  @ApiProperty({ required: false })
  qty: number;

  @ApiProperty({ required: false })
  satuan: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
