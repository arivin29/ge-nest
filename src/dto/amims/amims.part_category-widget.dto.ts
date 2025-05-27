import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartCategoryDto } from './amims.part_category.dto';

export class AmimsPartCategoryWidgetDto extends AmimsPartCategoryDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
