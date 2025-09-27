import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirpihDto } from './new_bpt.onl_nirpih.dto';

export class NewBptOnlNirpihWidgetDto extends NewBptOnlNirpihDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
