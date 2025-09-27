import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNirp3hguDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNirp3hgu: number; // PK

  @ApiProperty({ required: true })
  noSk: string;

  @ApiProperty({ required: true })
  tglSk: string;
}
