import { ApiProperty } from '@nestjs/swagger';
import { NewBptMProvinsiDto } from './new_bpt.m_provinsi.dto';

export class NewBptMProvinsiWidgetDto extends NewBptMProvinsiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
