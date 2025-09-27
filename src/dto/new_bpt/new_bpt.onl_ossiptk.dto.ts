import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssiptkDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssiptk: number; // PK

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  lahan: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaTk: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
