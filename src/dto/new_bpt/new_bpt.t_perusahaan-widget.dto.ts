import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanDto } from './new_bpt.t_perusahaan.dto';

export class NewBptTPerusahaanWidgetDto extends NewBptTPerusahaanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
