import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPerusahaanBidangUsahaDto } from './new_bpt.m_perusahaan_bidang_usaha.dto';

export class NewBptMPerusahaanBidangUsahaWidgetDto extends NewBptMPerusahaanBidangUsahaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
