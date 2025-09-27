import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinRpphanDto {
  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinRpphan: number; // PK

  @ApiProperty({ required: true })
  negara: string;

  @ApiProperty({ required: true })
  pelabuhan: string;

  @ApiProperty({ required: true })
  tanggalAkhir: string;

  @ApiProperty({ required: true })
  tanggalAwal: string;

  @ApiProperty({ required: true })
  tujuan: string;
}
