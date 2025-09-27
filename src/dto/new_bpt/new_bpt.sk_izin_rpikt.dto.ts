import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinRpiktDto {
  @ApiProperty({ required: true })
  aktePendirian: string;

  @ApiProperty({ required: true })
  apip: string;

  @ApiProperty({ required: true })
  drHewan: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinRpikt: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  ippt: string;

  @ApiProperty({ required: true })
  izinLingkungan: string;

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: true })
  kapasitas: string;

  @ApiProperty({ required: true })
  keputusan: string;

  @ApiProperty({ required: true })
  keputusanMenteri: string;

  @ApiProperty({ required: true })
  luasKandang: string;

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  peninjau: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: true })
  siup: string;

  @ApiProperty({ required: true })
  skdu: string;

  @ApiProperty({ required: true })
  tdp: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tgls: string;
}
