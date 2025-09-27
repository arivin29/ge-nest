import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSikpDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSikp: number; // PK

  @ApiProperty({ required: true })
  noPpni: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  untukPraktek: string;
}
