import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIprthppDto {
  @ApiProperty({ required: true })
  dataPohon: string;

  @ApiProperty({ required: true })
  diameter: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIprthpp: number; // PK

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  jumlahPohon: string;

  @ApiProperty({ required: true })
  lokasi: string;

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  namaPohon: string;

  @ApiProperty({ required: true })
  ruasJalan: string;

  @ApiProperty({ required: true })
  tinggi: string;

  @ApiProperty({ required: true })
  tujuanPenebangan: string;
}
