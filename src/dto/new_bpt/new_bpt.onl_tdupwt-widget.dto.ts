import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupwtDto } from './new_bpt.onl_tdupwt.dto';

export class NewBptOnlTdupwtWidgetDto extends NewBptOnlTdupwtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
