import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNitdebhDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNitdebh: number; // PK

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  tglRekom: string;
}
