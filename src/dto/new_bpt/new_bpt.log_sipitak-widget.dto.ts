import { ApiProperty } from '@nestjs/swagger';
import { NewBptLogSipitakDto } from './new_bpt.log_sipitak.dto';

export class NewBptLogSipitakWidgetDto extends NewBptLogSipitakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
