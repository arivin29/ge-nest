import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinPemberitahuanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinPem: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggalPem: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSelesai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
