import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNitdpbhDto } from './new_bpt.onl_nitdpbh.dto';

export class NewBptOnlNitdpbhWidgetDto extends NewBptOnlNitdpbhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
