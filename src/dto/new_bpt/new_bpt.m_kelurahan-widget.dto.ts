import { ApiProperty } from '@nestjs/swagger';
import { NewBptMKelurahanDto } from './new_bpt.m_kelurahan.dto';

export class NewBptMKelurahanWidgetDto extends NewBptMKelurahanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
