import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIppkpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIppkp: number; // PK

  @ApiProperty({ required: true })
  nomorDlh: string;

  @ApiProperty({ required: true })
  tglDlh: string;
}
