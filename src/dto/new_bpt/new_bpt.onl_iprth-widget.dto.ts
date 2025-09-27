import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIprthDto } from './new_bpt.onl_iprth.dto';

export class NewBptOnlIprthWidgetDto extends NewBptOnlIprthDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
