import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanCabangAlamatDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  fax: string;

  @ApiProperty({ required: true })
  idKel: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaahaanCabangAlamat: number; // PK

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true })
  kodePos: string;

  @ApiProperty({ required: true })
  tlpn: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: true })
  web: string;
}
