import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpscDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpsc: number; // PK

  @ApiProperty({ required: true })
  namaPsc: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
