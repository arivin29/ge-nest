import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanTanahDto } from './new_bpt.t_perusahaan_tanah.dto';

export class NewBptTPerusahaanTanahWidgetDto extends NewBptTPerusahaanTanahDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
