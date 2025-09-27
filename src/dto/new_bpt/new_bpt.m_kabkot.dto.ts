import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMKabkotDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idKabkot: string; // PK

  @ApiProperty({ required: true })
  idProv: string;

  @ApiProperty({ required: true })
  namaKabkot: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
