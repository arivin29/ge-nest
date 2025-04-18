import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsCustomFieldDto {
  @ApiProperty({ required: true })
  idCustomField: string;

  @ApiProperty({ required: false })
  idCustomFieldGroup: string;

  @ApiProperty({ required: true })
  kodeField: string;

  @ApiProperty({ required: true })
  labelField: string;

  @ApiProperty({ required: false })
  prefixField: string;

  @ApiProperty({ required: true })
  tipeField: string;

  @ApiProperty({ required: false })
  opsiSelect: string;

  @ApiProperty({ required: false })
  isFilterable: boolean;

  @ApiProperty({ required: false })
  isRequired: boolean;

  @ApiProperty({ required: false })
  validasi: string;

  @ApiProperty({ required: false })
  defaultValue: string;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  urutan: number;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
