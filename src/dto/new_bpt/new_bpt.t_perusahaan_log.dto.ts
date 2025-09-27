import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanLogDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTPerusahaanLog: number; // PK

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
