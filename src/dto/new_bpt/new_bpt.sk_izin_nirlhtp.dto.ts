import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirlhtpDto {
  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirlhtp: number; // PK

  @ApiProperty({ required: true })
  Nama: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  Pelabuhan: string;

  @ApiProperty({ required: true })
  Perihals: string;

  @ApiProperty({ required: true })
  Tanggal: string;

  @ApiProperty({ required: true })
  tgls: string;

  @ApiProperty({ required: true })
  Tujuan: string;
}
