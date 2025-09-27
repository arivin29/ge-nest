import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisKelengkapanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisKelengkapan: number; // PK

  @ApiProperty({ required: true })
  idKelengkapan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
