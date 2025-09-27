import { ApiProperty } from '@nestjs/swagger';
import { NewBptTConfTlpDto } from './new_bpt.t_conf_tlp.dto';

export class NewBptTConfTlpWidgetDto extends NewBptTConfTlpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
