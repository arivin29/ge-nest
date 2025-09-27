import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisSyaratDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true })
  idIzinJenisKategori: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisSyarat: number; // PK

  @ApiProperty({ required: true })
  syarat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
