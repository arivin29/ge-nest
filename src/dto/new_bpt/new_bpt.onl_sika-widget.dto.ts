import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSikaDto } from './new_bpt.onl_sika.dto';

export class NewBptOnlSikaWidgetDto extends NewBptOnlSikaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
