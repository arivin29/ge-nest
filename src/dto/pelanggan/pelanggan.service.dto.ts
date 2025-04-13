import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganServiceDto {
  @ApiProperty({ required: true })
  idService: string;

  @ApiProperty({ required: false })
  kodeService: string;

  @ApiProperty({ required: true })
  namaService: string;

  @ApiProperty({ required: false })
  deskripsi: string;

  @ApiProperty({ required: false })
  satuan: string;

  @ApiProperty({ required: false })
  hargaDefault: number;

  @ApiProperty({ required: false })
  isAktif: boolean;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
