import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMPerusahaanBadanUsahaDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanBadanUsaha: number; // PK

  @ApiProperty({ required: true })
  kode: string;

  @ApiProperty({ required: true })
  kodeBadanHukum: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  noUrutNext: number;

  @ApiProperty({ required: false })
  @IsOptional()
  undangUndang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
