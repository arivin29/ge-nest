import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipperawatDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipperawat: number; // PK

  @ApiProperty({ required: true })
  noStr: string;

  @ApiProperty({ required: true })
  rekomPpni: string;
}
