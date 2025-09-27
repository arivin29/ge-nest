import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSikpDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSikp: number; // PK

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: true })
  noPpni: string;

  @ApiProperty({ required: true })
  nomorStr: string;
}
