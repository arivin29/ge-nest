import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIprthppDto } from './new_bpt.onl_iprthpp.dto';

export class NewBptOnlIprthppWidgetDto extends NewBptOnlIprthppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
