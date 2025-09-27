import { ApiProperty } from '@nestjs/swagger';
import { NewBptMKabkotDto } from './new_bpt.m_kabkot.dto';

export class NewBptMKabkotWidgetDto extends NewBptMKabkotDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
