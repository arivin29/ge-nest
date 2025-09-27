import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPerusahaanSektorDto } from './new_bpt.m_perusahaan_sektor.dto';

export class NewBptMPerusahaanSektorWidgetDto extends NewBptMPerusahaanSektorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
