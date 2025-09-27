import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNippjtpDto } from './new_bpt.onl_nippjtp.dto';

export class NewBptOnlNippjtpWidgetDto extends NewBptOnlNippjtpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
