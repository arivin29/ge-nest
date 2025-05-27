import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPartCategoryDto {
  @ApiProperty({ required: true })
  idPartCategory: string;

  @ApiProperty({ required: false })
  category: string;

  @ApiProperty({ required: false })
  parentCat: number;

  @ApiProperty({ required: false })
  descriptionCat: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  isDeleted: number;
}
