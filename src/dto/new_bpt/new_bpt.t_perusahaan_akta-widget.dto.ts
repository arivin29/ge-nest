import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanAktaDto } from './new_bpt.t_perusahaan_akta.dto';

export class NewBptTPerusahaanAktaWidgetDto extends NewBptTPerusahaanAktaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
