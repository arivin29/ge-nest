import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanBadanUsahaDto } from './new_bpt.t_perusahaan_badan_usaha.dto';

export class NewBptTPerusahaanBadanUsahaWidgetDto extends NewBptTPerusahaanBadanUsahaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
