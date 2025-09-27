import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIptktDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIptkt: number; // PK

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  nomorRekom: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  tglStr: string;
}
