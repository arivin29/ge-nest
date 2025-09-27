import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpalDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpal: number; // PK

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: true })
  jumlahHk: string;

  @ApiProperty({ required: true })
  kapasitas: string;

  @ApiProperty({ required: true })
  kapasitasProduksi: string;

  @ApiProperty({ required: true })
  lokasiPembuangan: string;

  @ApiProperty({ required: true })
  periode: string;

  @ApiProperty({ required: true })
  sistemPengolahan: string;

  @ApiProperty({ required: true })
  tahunOperasi: string;

  @ApiProperty({ required: true })
  volume: string;
}
