import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNippjhDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNippjh: number; // PK

  @ApiProperty({ required: true })
  nomorKesesuaian: string;

  @ApiProperty({ required: true })
  tglKesesuaian: string;
}
