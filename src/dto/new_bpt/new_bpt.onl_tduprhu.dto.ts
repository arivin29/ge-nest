import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlTduprhuDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlTduprhu: number; // PK

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: true })
  namaUsaha: string;

  @ApiProperty({ required: true })
  noAktaPendirian: string;

  @ApiProperty({ required: true })
  subjenisUsaha: string;
}
