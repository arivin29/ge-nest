import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPemberiFileDto } from './new_bpt.t_pemberi_file.dto';

export class NewBptTPemberiFileWidgetDto extends NewBptTPemberiFileDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
