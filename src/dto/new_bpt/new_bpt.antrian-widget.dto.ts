import { ApiProperty } from '@nestjs/swagger';
import { NewBptAntrianDto } from './new_bpt.antrian.dto';

export class NewBptAntrianWidgetDto extends NewBptAntrianDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
