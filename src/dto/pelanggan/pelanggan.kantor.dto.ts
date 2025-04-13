import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganKantorDto {
  @ApiProperty({ required: true })
  idKantor: string;

  @ApiProperty({ required: true })
  namaKantor: string;

  @ApiProperty({ required: false })
  kodeKantor: string;

  @ApiProperty({ required: false })
  alamat: string;

  @ApiProperty({ required: false })
  kota: string;

  @ApiProperty({ required: false })
  provinsi: string;

  @ApiProperty({ required: false })
  isPusat: boolean;

  @ApiProperty({ required: false })
  isAktif: boolean;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
