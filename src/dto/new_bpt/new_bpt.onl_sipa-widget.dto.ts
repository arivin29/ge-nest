import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipaDto } from './new_bpt.onl_sipa.dto';

export class NewBptOnlSipaWidgetDto extends NewBptOnlSipaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
