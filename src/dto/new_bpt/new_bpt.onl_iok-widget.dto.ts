import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIokDto } from './new_bpt.onl_iok.dto';

export class NewBptOnlIokWidgetDto extends NewBptOnlIokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
