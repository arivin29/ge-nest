import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNiskp2btpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNiskp2btp: number; // PK

  @ApiProperty({ required: true })
  jmlTk: string;

  @ApiProperty({ required: true })
  kompetensiTk: string;
}
