import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanSektorItemDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true })
  idPerusahaanSektor: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanSektorItem: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
