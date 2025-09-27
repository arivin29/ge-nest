import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNisppkaDto } from './new_bpt.onl_nisppka.dto';

export class NewBptOnlNisppkaWidgetDto extends NewBptOnlNisppkaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
