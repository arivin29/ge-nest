import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPengirimanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  alamat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idKabkot: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idKec: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idKel: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTPengiriman: number; // PK

  @ApiProperty({ required: true })
  kodepos: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
