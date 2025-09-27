import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinLogDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinLog: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinPosisi: number;

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
