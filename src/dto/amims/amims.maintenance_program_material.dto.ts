import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceProgramMaterialDto {
  @ApiProperty({ required: false, description: 'Type of item: TOOL, CONSUMABLE, etc.' })
  itemType: string;

  @ApiProperty({ required: false, description: 'ID master part' })
  idMpart: string;

  @ApiProperty({ required: false, description: 'Part number' })
  partNumber: string;

  @ApiProperty({ required: false, description: 'Item name' })
  itemName: string;

  @ApiProperty({ required: false, description: 'Unit of measurement' })
  unit: string;

  @ApiProperty({ required: false, description: 'Total quantity' })
  totalQty: number;
}
