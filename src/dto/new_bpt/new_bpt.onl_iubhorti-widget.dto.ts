import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIubhortiDto } from './new_bpt.onl_iubhorti.dto';

export class NewBptOnlIubhortiWidgetDto extends NewBptOnlIubhortiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
