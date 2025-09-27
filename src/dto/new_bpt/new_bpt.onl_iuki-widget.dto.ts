import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIukiDto } from './new_bpt.onl_iuki.dto';

export class NewBptOnlIukiWidgetDto extends NewBptOnlIukiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
