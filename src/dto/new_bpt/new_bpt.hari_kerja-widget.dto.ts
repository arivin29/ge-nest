import { ApiProperty } from '@nestjs/swagger';
import { NewBptHariKerjaDto } from './new_bpt.hari_kerja.dto';

export class NewBptHariKerjaWidgetDto extends NewBptHariKerjaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
