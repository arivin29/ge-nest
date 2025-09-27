import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisTipeDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true })
  idIzinJenisKategori: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisTipe: number; // PK

  @ApiProperty({ required: true })
  idIzinTipe: number;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
