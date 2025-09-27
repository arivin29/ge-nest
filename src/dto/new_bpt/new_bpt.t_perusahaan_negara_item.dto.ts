import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPerusahaanNegaraItemDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true })
  idPerusahaanNegara: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanNegaraItem: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
