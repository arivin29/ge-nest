import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpmkmDto } from './new_bpt.onl_ipmkm.dto';

export class NewBptOnlIpmkmWidgetDto extends NewBptOnlIpmkmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
