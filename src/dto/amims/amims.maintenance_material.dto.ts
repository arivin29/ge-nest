import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceMaterialDto {
  @ApiProperty({ required: true })
  idMaintenanceMaterial: string;

  @ApiProperty({ required: false })
  idMaintenance: string;

  @ApiProperty({ required: false })
  itemType: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  itemName: string;

  @ApiProperty({ required: false })
  partNumber: string;

  @ApiProperty({ required: false })
  toolCode: string;

  @ApiProperty({ required: false })
  quantity: number;

  @ApiProperty({ required: false })
  unit: string;

  @ApiProperty({ required: false })
  isSpecialTool: boolean;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
