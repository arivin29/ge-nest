import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSitgDto } from './new_bpt.onl_sitg.dto';

export class NewBptOnlSitgWidgetDto extends NewBptOnlSitgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
