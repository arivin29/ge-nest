import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlPbgDto } from './new_bpt.onl_pbg.dto';

export class NewBptOnlPbgWidgetDto extends NewBptOnlPbgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
