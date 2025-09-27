import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanSektorItemDto } from './new_bpt.t_perusahaan_sektor_item.dto';

export class NewBptTPerusahaanSektorItemWidgetDto extends NewBptTPerusahaanSektorItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
