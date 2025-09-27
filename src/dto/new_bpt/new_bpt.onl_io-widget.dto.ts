import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIoDto } from './new_bpt.onl_io.dto';

export class NewBptOnlIoWidgetDto extends NewBptOnlIoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
