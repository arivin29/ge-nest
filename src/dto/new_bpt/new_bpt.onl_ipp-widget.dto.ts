import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIppDto } from './new_bpt.onl_ipp.dto';

export class NewBptOnlIppWidgetDto extends NewBptOnlIppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
