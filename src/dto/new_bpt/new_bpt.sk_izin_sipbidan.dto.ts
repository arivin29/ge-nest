import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipbidanDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipbidan: number; // PK

  @ApiProperty({ required: true })
  noSib: string;

  @ApiProperty({ required: true })
  rekomIbi: string;

  @ApiProperty({ required: true })
  strBerlaku: string;
}
