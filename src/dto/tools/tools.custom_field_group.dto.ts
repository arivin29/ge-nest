import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsCustomFieldGroupDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deskripsi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forKantor: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forRole: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idCustomFieldGroup: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  isRepeatable: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  modul: string;

  @ApiProperty({ required: true })
  namaGroup: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tableName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tipeRender: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  urutan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  visibilityRule: string;
}
