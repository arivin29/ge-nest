import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinArsipLamaDto {
  @ApiProperty({ required: true })
  alamat: string;

  @ApiProperty({ required: true })
  barcode: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  file: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinArsipLama: number; // PK

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true })
  idIzinTipe: number;

  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;

  @ApiProperty({ required: true })
  noSk: string;

  @ApiProperty({ required: true })
  pemohon: string;

  @ApiProperty({ required: true })
  peruntukan: string;

  @ApiProperty({ required: true })
  perusahaan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
