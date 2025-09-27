import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSipbidanDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSipbidan: number; // PK

  @ApiProperty({ required: true })
  noSib: string;

  @ApiProperty({ required: true })
  rekomIbi: string;

  @ApiProperty({ required: true })
  strBerlaku: string;
}
