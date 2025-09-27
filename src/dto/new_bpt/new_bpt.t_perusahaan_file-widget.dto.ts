import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanFileDto } from './new_bpt.t_perusahaan_file.dto';

export class NewBptTPerusahaanFileWidgetDto extends NewBptTPerusahaanFileDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
