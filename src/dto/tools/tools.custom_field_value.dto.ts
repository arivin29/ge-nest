import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsCustomFieldValueDto {
  @ApiProperty({ required: true })
  idCustomFieldValue: string;

  @ApiProperty({ required: true })
  idCustomField: string;

  @ApiProperty({ required: false })
  idCustomFieldGroup: string;

  @ApiProperty({ required: false })
  modul: string;

  @ApiProperty({ required: false })
  tableName: string;

  @ApiProperty({ required: true })
  modulId: string;

  @ApiProperty({ required: false })
  nilai: string;

  @ApiProperty({ required: false })
  nilaiJson: string;

  @ApiProperty({ required: false })
  kodeField: string;

  @ApiProperty({ required: false })
  labelField: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
