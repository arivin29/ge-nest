import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlRtkhDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlRtkh: number; // PK

  @ApiProperty({ required: true })
  no: string;

  @ApiProperty({ required: true })
  tgl: string;
}
