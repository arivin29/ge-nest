import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMPerusahaanNegaraDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPerusahaanNegara: number; // PK

  @ApiProperty({ required: true })
  kodeNegara: string;

  @ApiProperty({ required: true })
  namaNegara: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
