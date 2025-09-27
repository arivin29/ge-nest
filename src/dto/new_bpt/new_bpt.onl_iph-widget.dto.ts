import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIphDto } from './new_bpt.onl_iph.dto';

export class NewBptOnlIphWidgetDto extends NewBptOnlIphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
