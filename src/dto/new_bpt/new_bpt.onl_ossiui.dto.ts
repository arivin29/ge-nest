import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssiuiDto {
  @ApiProperty({ required: false })
  @IsOptional()
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssiui: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  investasi: number;

  @ApiProperty({ required: false })
  @IsOptional()
  namaKbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nib: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorKbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  statusBangunan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tka: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tki: number;
}
