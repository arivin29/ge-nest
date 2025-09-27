import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirphtpDto } from './new_bpt.onl_nirphtp.dto';

export class NewBptOnlNirphtpWidgetDto extends NewBptOnlNirphtpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
