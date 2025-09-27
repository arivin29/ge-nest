import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIuperkebunanDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIuperkebunan: number; // PK

  @ApiProperty({ required: true })
  nomorKesesuaian: string;

  @ApiProperty({ required: true })
  nomorLokasi: string;

  @ApiProperty({ required: true })
  tglKesesuaian: string;

  @ApiProperty({ required: true })
  tglLokasi: string;
}
