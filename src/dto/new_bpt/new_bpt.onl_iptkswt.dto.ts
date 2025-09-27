import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIptkswtDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIptkswt: number; // PK

  @ApiProperty({ required: true })
  namaTk: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
