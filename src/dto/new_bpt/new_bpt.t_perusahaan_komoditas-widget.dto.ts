import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanKomoditasDto } from './new_bpt.t_perusahaan_komoditas.dto';

export class NewBptTPerusahaanKomoditasWidgetDto extends NewBptTPerusahaanKomoditasDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
