import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIppohonDto } from './new_bpt.onl_ippohon.dto';

export class NewBptOnlIppohonWidgetDto extends NewBptOnlIppohonDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
