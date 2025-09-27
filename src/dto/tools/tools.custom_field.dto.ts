import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsCustomFieldDto {
  @ApiProperty({ required: false })
  @IsOptional()
  catatan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  defaultValue: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idCustomField: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idCustomFieldGroup: string;

  @ApiProperty({ required: false })
  @IsOptional()
  isFilterable: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  isRequired: boolean;

  @ApiProperty({ required: true })
  kodeField: string;

  @ApiProperty({ required: true })
  labelField: string;

  @ApiProperty({ required: false })
  @IsOptional()
  opsiSelect: string;

  @ApiProperty({ required: false })
  @IsOptional()
  prefixField: string;

  @ApiProperty({ required: true })
  tipeField: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  urutan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  validasi: string;
}
