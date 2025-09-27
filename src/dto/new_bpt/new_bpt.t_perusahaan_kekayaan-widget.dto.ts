import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanKekayaanDto } from './new_bpt.t_perusahaan_kekayaan.dto';

export class NewBptTPerusahaanKekayaanWidgetDto extends NewBptTPerusahaanKekayaanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
