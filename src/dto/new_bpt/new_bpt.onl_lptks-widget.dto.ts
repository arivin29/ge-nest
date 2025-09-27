import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlLptksDto } from './new_bpt.onl_lptks.dto';

export class NewBptOnlLptksWidgetDto extends NewBptOnlLptksDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
