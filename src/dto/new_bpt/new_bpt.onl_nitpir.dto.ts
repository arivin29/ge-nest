import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNitpirDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNitpir: number; // PK

  @ApiProperty({ required: true })
  no: string;

  @ApiProperty({ required: true })
  tgl: string;
}
