import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanLogDto } from './new_bpt.t_perusahaan_log.dto';

export class NewBptTPerusahaanLogWidgetDto extends NewBptTPerusahaanLogDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
