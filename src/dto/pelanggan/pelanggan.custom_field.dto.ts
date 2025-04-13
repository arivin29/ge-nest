import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganCustomFieldDto {
  @ApiProperty({ required: true })
  idCustomField: string;

  @ApiProperty({ required: false })
  modul: string;

  @ApiProperty({ required: false })
  tableName: string;

  @ApiProperty({ required: false })
  kodeField: string;

  @ApiProperty({ required: false })
  labelField: string;

  @ApiProperty({ required: false })
  tipeField: string;

  @ApiProperty({ required: false })
  opsiSelect: string;

  @ApiProperty({ required: false })
  isFilterable: boolean;

  @ApiProperty({ required: false })
  isRequired: boolean;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  status: string;
}
