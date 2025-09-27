import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSippDto } from './new_bpt.onl_sipp.dto';

export class NewBptOnlSippWidgetDto extends NewBptOnlSippDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
