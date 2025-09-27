import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNiriuohDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNiriuoh: number; // PK

  @ApiProperty({ required: true })
  Jenis: string;

  @ApiProperty({ required: true })
  Nos: string;

  @ApiProperty({ required: true })
  Perihals: string;

  @ApiProperty({ required: true })
  Tgls: string;
}
