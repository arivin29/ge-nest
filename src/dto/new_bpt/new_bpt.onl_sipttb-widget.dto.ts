import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipttbDto } from './new_bpt.onl_sipttb.dto';

export class NewBptOnlSipttbWidgetDto extends NewBptOnlSipttbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
