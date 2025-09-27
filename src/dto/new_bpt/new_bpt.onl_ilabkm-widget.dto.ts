import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIlabkmDto } from './new_bpt.onl_ilabkm.dto';

export class NewBptOnlIlabkmWidgetDto extends NewBptOnlIlabkmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
