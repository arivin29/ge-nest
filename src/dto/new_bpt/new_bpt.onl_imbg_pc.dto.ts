import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlImbgPcDto {
  @ApiProperty({ required: true })
  bertindak: string;

  @ApiProperty({ required: true })
  blok: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idKec: string;

  @ApiProperty({ required: true })
  idKel: string;

  @ApiProperty({ required: true })
  idOnlImbg: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlImbgPc: number; // PK

  @ApiProperty({ required: true })
  no: string;

  @ApiProperty({ required: true })
  noSkLama: string;

  @ApiProperty({ required: true })
  tglSkLama: string;
}
