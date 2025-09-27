import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIprDto {
  @ApiProperty({ required: true })
  fileLampiran: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpr: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  imbg: string;

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  jenisReklame: string;

  @ApiProperty({ required: true })
  jumlahReklame: string;

  @ApiProperty({ required: true })
  lebar: number;

  @ApiProperty({ required: true })
  lokasiPemasangan: string;

  @ApiProperty({ required: true })
  masaBerlaku: string;

  @ApiProperty({ required: true })
  muka: number;

  @ApiProperty({ required: true })
  naskahReklame: string;

  @ApiProperty({ required: true })
  panjang: number;

  @ApiProperty({ required: true })
  pekerjaan: string;

  @ApiProperty({ required: true })
  status: string;

  @ApiProperty({ required: true })
  statusLahan: string;

  @ApiProperty({ required: true })
  tinggi: number;

  @ApiProperty({ required: true })
  ukuranReklame: string;
}
