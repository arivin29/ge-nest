import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIuperkebunanDto } from './new_bpt.onl_iuperkebunan.dto';

export class NewBptOnlIuperkebunanWidgetDto extends NewBptOnlIuperkebunanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
