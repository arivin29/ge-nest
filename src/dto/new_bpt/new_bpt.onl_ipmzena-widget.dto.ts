import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpmzenaDto } from './new_bpt.onl_ipmzena.dto';

export class NewBptOnlIpmzenaWidgetDto extends NewBptOnlIpmzenaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
