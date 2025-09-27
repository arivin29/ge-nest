import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPerusahaanAktaTipeDto } from './new_bpt.m_perusahaan_akta_tipe.dto';

export class NewBptMPerusahaanAktaTipeWidgetDto extends NewBptMPerusahaanAktaTipeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
