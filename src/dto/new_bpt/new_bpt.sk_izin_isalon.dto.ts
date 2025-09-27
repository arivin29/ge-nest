import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIsalonDto {
  @ApiProperty({ required: true })
  bapLapangan: string;

  @ApiProperty({ required: true })
  bidangKegiatan: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIsalon: number; // PK

  @ApiProperty({ required: true })
  nomorBap: string;

  @ApiProperty({ required: true })
  nomorSurat: string;

  @ApiProperty({ required: true })
  rekom: string;

  @ApiProperty({ required: true })
  tglBap: string;

  @ApiProperty({ required: true })
  tglBapLapangan: string;
}
