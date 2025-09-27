import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIoDto {
  @ApiProperty({ required: true })
  badanUsaha: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIo: number; // PK

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
