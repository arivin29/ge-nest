import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNitpirDto } from './new_bpt.onl_nitpir.dto';

export class NewBptOnlNitpirWidgetDto extends NewBptOnlNitpirDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
