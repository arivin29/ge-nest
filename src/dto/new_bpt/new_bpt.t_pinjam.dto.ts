import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPinjamDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPinjam: number; // PK

  @ApiProperty({ required: true })
  namaPeminjam: string;

  @ApiProperty({ required: false })
  @IsOptional()
  petugasKembali: string;

  @ApiProperty({ required: true })
  petugasPinjam: string;

  @ApiProperty({ required: true })
  statusPinjam: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tglKembali: string;

  @ApiProperty({ required: true })
  tglPinjam: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
