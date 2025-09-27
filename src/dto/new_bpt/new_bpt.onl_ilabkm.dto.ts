import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIlabkmDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIlabkm: number; // PK

  @ApiProperty({ required: true })
  namaLab: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
