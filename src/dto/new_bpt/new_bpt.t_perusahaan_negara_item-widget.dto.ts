import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanNegaraItemDto } from './new_bpt.t_perusahaan_negara_item.dto';

export class NewBptTPerusahaanNegaraItemWidgetDto extends NewBptTPerusahaanNegaraItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
