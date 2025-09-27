import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirppDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirpp: number; // PK

  @ApiProperty({ required: true })
  importir: string;

  @ApiProperty({ required: true })
  jenisPakan: string;

  @ApiProperty({ required: true })
  kodePakan: string;

  @ApiProperty({ required: true })
  namaDagang: string;

  @ApiProperty({ required: true })
  noSertifikat: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  penggunaan: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  saranTeknis: string;

  @ApiProperty({ required: true })
  skdp: string;

  @ApiProperty({ required: true })
  suratPermohonan: string;

  @ApiProperty({ required: true })
  tdp: string;

  @ApiProperty({ required: true })
  tgls: string;
}
