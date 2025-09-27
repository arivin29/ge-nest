import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptExternalDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idExternal: number; // PK

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  psswrd: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  usrnm: string;
}
