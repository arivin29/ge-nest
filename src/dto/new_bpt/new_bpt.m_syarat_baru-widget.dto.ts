import { ApiProperty } from '@nestjs/swagger';
import { NewBptMSyaratBaruDto } from './new_bpt.m_syarat_baru.dto';

export class NewBptMSyaratBaruWidgetDto extends NewBptMSyaratBaruDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
