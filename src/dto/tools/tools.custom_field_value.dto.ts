import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsCustomFieldValueDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idCustomField: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idCustomFieldGroup: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idCustomFieldValue: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  kodeField: string;

  @ApiProperty({ required: false })
  @IsOptional()
  labelField: string;

  @ApiProperty({ required: false })
  @IsOptional()
  modul: string;

  @ApiProperty({ required: true })
  modulId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nilai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nilaiJson: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tableName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
