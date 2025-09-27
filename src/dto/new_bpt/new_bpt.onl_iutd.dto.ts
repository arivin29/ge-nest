import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIutdDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIutd: number; // PK

  @ApiProperty({ required: true })
  nomorDinkes: string;

  @ApiProperty({ required: true })
  nomorPmiJabar: string;

  @ApiProperty({ required: true })
  nomorPmiPusat: string;

  @ApiProperty({ required: true })
  tglDinkes: string;

  @ApiProperty({ required: true })
  tglPmiJabar: string;

  @ApiProperty({ required: true })
  tglPmiPusat: string;
}
