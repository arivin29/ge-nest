import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIlokDto } from './new_bpt.onl_ilok.dto';

export class NewBptOnlIlokWidgetDto extends NewBptOnlIlokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
