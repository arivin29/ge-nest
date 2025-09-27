import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisKategoriDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinJenis: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisKategori: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  kategori: string;

  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
