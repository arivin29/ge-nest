import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptHariKerjaDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idHariKerja: number; // PK

  @ApiProperty({ required: true })
  tanggal: string;
}
