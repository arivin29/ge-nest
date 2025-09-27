import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptUserKecamatanDto {
  @ApiProperty({ required: true })
  idKecamatan: number;

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idUserKecamatan: number; // PK
}
