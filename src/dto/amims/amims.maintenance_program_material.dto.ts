import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceProgramMaterialDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: true })
  idMaintenanceProgram: string;

  @ApiProperty({ required: true })
  idMaintenanceProgramMaterial: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  itemName: string;

  @ApiProperty({ required: false })
  itemType: string;

  @ApiProperty({ required: false })
  partNumber: string;

  @ApiProperty({ required: false })
  quantity: number;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  toolCode: string;

  @ApiProperty({ required: false })
  unit: string;
}
