import { ApiProperty } from '@nestjs/swagger';
import { NewBptHelpDto } from './new_bpt.help.dto';

export class NewBptHelpWidgetDto extends NewBptHelpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
