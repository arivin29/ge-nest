import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinTduppwDto {
  @ApiProperty({ required: true })
  bidangUsaha: string;

  @ApiProperty({ required: true })
  dlh: string;

  @ApiProperty({ required: true })
  fasilitasPendukung: string;

  @ApiProperty({ required: true })
  fasilitasUtama: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinTduppw: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  ippt: string;

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: true })
  kajianTeknis: string;

  @ApiProperty({ required: true })
  namaUsaha: string;

  @ApiProperty({ required: true })
  noAktaPendirian: string;

  @ApiProperty({ required: true })
  perjanjianSewa: string;

  @ApiProperty({ required: true })
  sewa: string;
}
