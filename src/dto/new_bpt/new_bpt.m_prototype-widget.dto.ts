import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPrototypeDto } from './new_bpt.m_prototype.dto';

export class NewBptMPrototypeWidgetDto extends NewBptMPrototypeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
