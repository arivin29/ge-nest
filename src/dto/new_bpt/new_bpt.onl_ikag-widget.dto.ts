import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIkagDto } from './new_bpt.onl_ikag.dto';

export class NewBptOnlIkagWidgetDto extends NewBptOnlIkagDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
