import { ApiProperty } from '@nestjs/swagger';
import { NewBptExternalDto } from './new_bpt.external.dto';

export class NewBptExternalWidgetDto extends NewBptExternalDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
