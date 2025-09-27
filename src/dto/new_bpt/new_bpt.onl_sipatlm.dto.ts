import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSipatlmDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSipatlm: number; // PK

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  rekom: string;
}
