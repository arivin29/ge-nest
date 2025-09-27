import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlTdupjipDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlTdupjip: number; // PK

  @ApiProperty({ required: true })
  namaUsaha: string;

  @ApiProperty({ required: true })
  noAktaPendirian: string;
}
