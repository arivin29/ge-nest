import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceCodeDto {
  @ApiProperty({ required: false })
  classification: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  descriptionMaintenance: string;

  @ApiProperty({ required: true })
  idMaintenanceCode: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  maintenanceCode: string;

  @ApiProperty({ required: false })
  oldId: string;

  @ApiProperty({ required: false })
  reference: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
