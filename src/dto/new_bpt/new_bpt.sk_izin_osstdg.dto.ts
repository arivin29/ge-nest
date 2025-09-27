import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOsstdgDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  golGudang: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOsstdg: number; // PK

  @ApiProperty({ required: true })
  jenisBarang: string;

  @ApiProperty({ required: true })
  kapasitasGudang: string;

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  lat: string;

  @ApiProperty({ required: true })
  lon: string;

  @ApiProperty({ required: true })
  luasGudang: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
