import { ApiProperty } from '@nestjs/swagger';
import { NewBptTokeneDto } from './new_bpt.tokene.dto';

export class NewBptTokeneWidgetDto extends NewBptTokeneDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
