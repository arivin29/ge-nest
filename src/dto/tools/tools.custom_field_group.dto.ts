import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsCustomFieldGroupDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  deskripsi: string;

  @ApiProperty({ required: false })
  forKantor: string;

  @ApiProperty({ required: false })
  forRole: string;

  @ApiProperty({ required: true })
  idCustomFieldGroup: string;

  @ApiProperty({ required: false })
  isRepeatable: boolean;

  @ApiProperty({ required: false })
  modul: string;

  @ApiProperty({ required: true })
  namaGroup: string;

  @ApiProperty({ required: false })
  tableName: string;

  @ApiProperty({ required: false })
  tipeRender: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  urutan: number;

  @ApiProperty({ required: false })
  visibilityRule: string;
}
