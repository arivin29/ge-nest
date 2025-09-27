import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNirmhtnDto {
  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNirmhtn: number; // PK

  @ApiProperty({ required: true })
  negara: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  pelabuhan: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  tgls: string;

  @ApiProperty({ required: true })
  tujuan: string;
}
