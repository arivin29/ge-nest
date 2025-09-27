import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPerusahaanBadanUsahaDto } from './new_bpt.m_perusahaan_badan_usaha.dto';

export class NewBptMPerusahaanBadanUsahaWidgetDto extends NewBptMPerusahaanBadanUsahaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
