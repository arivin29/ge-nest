import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartCategoryDto {
  @ApiProperty({ required: false })
  category: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  descriptionCat: string;

  @ApiProperty({ required: true })
  idPartCategory: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  parentCat: number;

  @ApiProperty({ required: false })
  updatedAt: string;
}
