import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPerusahaanSektorBidangUsahaDto } from './new_bpt.m_perusahaan_sektor_bidang_usaha.dto';

export class NewBptMPerusahaanSektorBidangUsahaWidgetDto extends NewBptMPerusahaanSektorBidangUsahaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
