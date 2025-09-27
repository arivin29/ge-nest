import { ApiProperty } from '@nestjs/swagger';
import { NewBptExternalLogDto } from './new_bpt.external_log.dto';

export class NewBptExternalLogWidgetDto extends NewBptExternalLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
