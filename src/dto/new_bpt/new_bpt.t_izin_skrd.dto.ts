import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinSkrdDto {
  @ApiProperty({ required: false })
  @IsOptional()
  blnTunggakan: string;

  @ApiProperty({ required: true })
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  file: string;

  @ApiProperty({ required: false })
  @IsOptional()
  fileDenda: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinJenis: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTIzinSkrd: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idUser: number;

  @ApiProperty({ required: true })
  jenisImbg: boolean;

  @ApiProperty({ required: true })
  noUrut: number;

  @ApiProperty({ required: false })
  @IsOptional()
  peruntukanBangunan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rumus: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ttd: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  ttdDenda: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
