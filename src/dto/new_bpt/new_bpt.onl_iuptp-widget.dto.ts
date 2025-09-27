import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIuptpDto } from './new_bpt.onl_iuptp.dto';

export class NewBptOnlIuptpWidgetDto extends NewBptOnlIuptpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
