import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIujprdDto } from './new_bpt.onl_iujprd.dto';

export class NewBptOnlIujprdWidgetDto extends NewBptOnlIujprdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
