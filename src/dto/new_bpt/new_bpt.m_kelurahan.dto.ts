import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMKelurahanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idKec: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idKel: string; // PK

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  namaKel: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
