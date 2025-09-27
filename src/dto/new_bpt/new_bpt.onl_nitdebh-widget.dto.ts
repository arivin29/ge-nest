import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNitdebhDto } from './new_bpt.onl_nitdebh.dto';

export class NewBptOnlNitdebhWidgetDto extends NewBptOnlNitdebhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
