import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMTargetRetribusiDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTargetRetribusi: number; // PK

  @ApiProperty({ required: true })
  retribusi: number;

  @ApiProperty({ required: true })
  tahun: number;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
