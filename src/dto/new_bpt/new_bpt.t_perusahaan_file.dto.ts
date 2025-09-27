import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanFileDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  dateUpload: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idFile: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idIzin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idPerusahaan: number;

  @ApiProperty({ required: true })
  namaFile: string;

  @ApiProperty({ required: true })
  note: string;

  @ApiProperty({ required: true })
  paths: string;

  @ApiProperty({ required: true })
  typeFile: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
