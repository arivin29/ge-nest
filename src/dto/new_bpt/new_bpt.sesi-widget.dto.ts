import { ApiProperty } from '@nestjs/swagger';
import { NewBptSesiDto } from './new_bpt.sesi.dto';

export class NewBptSesiWidgetDto extends NewBptSesiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
