import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTokeneDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idTokene: number; // PK

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tokene: string;
}
