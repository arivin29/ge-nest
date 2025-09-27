import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssipspfDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssipspf: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jenisFormal: string;

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  lahan: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaSekolah: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: true })
  statusLahan: boolean;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBap: string;

  @ApiProperty({ required: true })
  tglPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tipeSekolah: string;
}
