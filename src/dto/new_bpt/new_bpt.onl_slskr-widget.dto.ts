import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSlskrDto } from './new_bpt.onl_slskr.dto';

export class NewBptOnlSlskrWidgetDto extends NewBptOnlSlskrDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
