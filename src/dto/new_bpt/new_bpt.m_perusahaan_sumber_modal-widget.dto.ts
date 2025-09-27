import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPerusahaanSumberModalDto } from './new_bpt.m_perusahaan_sumber_modal.dto';

export class NewBptMPerusahaanSumberModalWidgetDto extends NewBptMPerusahaanSumberModalDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
