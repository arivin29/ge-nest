import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMKecamatanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idKabkot: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idKec: string; // PK

  @ApiProperty({ required: true })
  namaKec: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
