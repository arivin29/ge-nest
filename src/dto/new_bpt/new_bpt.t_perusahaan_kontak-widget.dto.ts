import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanKontakDto } from './new_bpt.t_perusahaan_kontak.dto';

export class NewBptTPerusahaanKontakWidgetDto extends NewBptTPerusahaanKontakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
