import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsStoreThresholdDto {
  @ApiProperty({ required: true })
  idStoreThreshold: string;

  @ApiProperty({ required: true })
  idMpart: string;

  @ApiProperty({ required: false })
  idStore: string;

  @ApiProperty({ required: false })
  minStock: number;

  @ApiProperty({ required: false })
  maxStock: number;

  @ApiProperty({ required: false })
  safetyStock: number;

  @ApiProperty({ required: false })
  reorderPoint: number;

  @ApiProperty({ required: false })
  reorderQuantity: number;

  @ApiProperty({ required: false })
  leadTimeDays: number;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ required: false })
  isActive: boolean;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedBy: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
