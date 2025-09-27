import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirmphnDto } from './new_bpt.onl_nirmphn.dto';

export class NewBptOnlNirmphnWidgetDto extends NewBptOnlNirmphnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
