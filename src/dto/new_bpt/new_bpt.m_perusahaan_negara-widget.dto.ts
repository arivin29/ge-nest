import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPerusahaanNegaraDto } from './new_bpt.m_perusahaan_negara.dto';

export class NewBptMPerusahaanNegaraWidgetDto extends NewBptMPerusahaanNegaraDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
