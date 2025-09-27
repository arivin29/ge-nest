import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinPrbbtnDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinPrbbtn: number; // PK

  @ApiProperty({ required: true })
  prinsip: string;

  @ApiProperty({ required: true })
  tgl: string;
}
