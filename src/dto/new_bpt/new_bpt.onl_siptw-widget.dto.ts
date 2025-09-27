import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSiptwDto } from './new_bpt.onl_siptw.dto';

export class NewBptOnlSiptwWidgetDto extends NewBptOnlSiptwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
