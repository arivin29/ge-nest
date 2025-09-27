import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlItpvDto } from './new_bpt.onl_itpv.dto';

export class NewBptOnlItpvWidgetDto extends NewBptOnlItpvDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
