import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinPbgDto {
  @ApiProperty({ required: true })
  alamatPbg: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinPbg: number; // PK

  @ApiProperty({ required: true })
  kepemilikan: string;

  @ApiProperty({ required: true })
  namaPemohon: string;

  @ApiProperty({ required: true })
  namaPerusahaan: string;

  @ApiProperty({ required: true })
  noPbg: string;

  @ApiProperty({ required: true })
  noSlf: string;

  @ApiProperty({ required: true })
  noregPbg: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusDesa: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusKec: string;

  @ApiProperty({ required: false })
  @IsOptional()
  revisi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggalPbg: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggalSlf: string;
}
