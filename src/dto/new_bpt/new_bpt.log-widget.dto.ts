import { ApiProperty } from '@nestjs/swagger';
import { NewBptLogDto } from './new_bpt.log.dto';

export class NewBptLogWidgetDto extends NewBptLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
