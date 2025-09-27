import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpbkrjDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpbkrj: number; // PK

  @ApiProperty({ required: true })
  namaBkk: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
