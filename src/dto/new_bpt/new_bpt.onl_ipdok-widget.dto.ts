import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpdokDto } from './new_bpt.onl_ipdok.dto';

export class NewBptOnlIpdokWidgetDto extends NewBptOnlIpdokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
