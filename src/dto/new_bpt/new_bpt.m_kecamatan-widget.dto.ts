import { ApiProperty } from '@nestjs/swagger';
import { NewBptMKecamatanDto } from './new_bpt.m_kecamatan.dto';

export class NewBptMKecamatanWidgetDto extends NewBptMKecamatanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
