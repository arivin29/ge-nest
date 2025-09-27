import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIprmDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIprm: number; // PK

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  noStr: string;
}
