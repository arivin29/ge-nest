import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSipotDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSipot: number; // PK

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  rekom: string;
}
