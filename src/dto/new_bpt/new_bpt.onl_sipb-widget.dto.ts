import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipbDto } from './new_bpt.onl_sipb.dto';

export class NewBptOnlSipbWidgetDto extends NewBptOnlSipbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
