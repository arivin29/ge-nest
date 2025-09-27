import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSpamDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSpam: number; // PK

  @ApiProperty({ required: true })
  noImb: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  tglImb: string;

  @ApiProperty({ required: true })
  tglRekom: string;
}
