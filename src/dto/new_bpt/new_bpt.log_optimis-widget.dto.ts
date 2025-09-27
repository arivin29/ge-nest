import { ApiProperty } from '@nestjs/swagger';
import { NewBptLogOptimisDto } from './new_bpt.log_optimis.dto';

export class NewBptLogOptimisWidgetDto extends NewBptLogOptimisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
