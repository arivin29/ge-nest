import { ApiProperty } from '@nestjs/swagger';
import { NewBptMTargetRetribusiDto } from './new_bpt.m_target_retribusi.dto';

export class NewBptMTargetRetribusiWidgetDto extends NewBptMTargetRetribusiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
