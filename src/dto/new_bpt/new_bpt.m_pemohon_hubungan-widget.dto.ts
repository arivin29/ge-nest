import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPemohonHubunganDto } from './new_bpt.m_pemohon_hubungan.dto';

export class NewBptMPemohonHubunganWidgetDto extends NewBptMPemohonHubunganDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
