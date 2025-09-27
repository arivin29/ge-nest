import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptHelpDto {
  @ApiProperty({ required: false })
  @IsOptional()
  file: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idHelp: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idIzin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUser: number;

  @ApiProperty({ required: false })
  @IsOptional()
  masalah: string;

  @ApiProperty({ required: false })
  @IsOptional()
  petugas: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggalSelesai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  telp: string;
}
