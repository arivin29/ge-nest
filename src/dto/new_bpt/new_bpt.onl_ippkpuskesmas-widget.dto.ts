import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIppkpuskesmasDto } from './new_bpt.onl_ippkpuskesmas.dto';

export class NewBptOnlIppkpuskesmasWidgetDto extends NewBptOnlIppkpuskesmasDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
