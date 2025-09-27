import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIptklDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIptkl: number; // PK

  @ApiProperty({ required: true })
  nomorRekom: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: true })
  sbg: string;

  @ApiProperty({ required: true })
  sub: string;

  @ApiProperty({ required: true })
  tglStr: string;
}
