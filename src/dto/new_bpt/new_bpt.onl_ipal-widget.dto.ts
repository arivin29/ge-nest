import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpalDto } from './new_bpt.onl_ipal.dto';

export class NewBptOnlIpalWidgetDto extends NewBptOnlIpalDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
