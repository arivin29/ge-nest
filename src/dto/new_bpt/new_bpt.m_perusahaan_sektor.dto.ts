import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMPerusahaanSektorDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanSektor: number; // PK

  @ApiProperty({ required: true })
  idPerusahaanSektorBidangUsaha: number;

  @ApiProperty({ required: true })
  perusahaanSektor: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
