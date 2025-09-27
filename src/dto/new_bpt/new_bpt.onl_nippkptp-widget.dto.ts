import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNippkptpDto } from './new_bpt.onl_nippkptp.dto';

export class NewBptOnlNippkptpWidgetDto extends NewBptOnlNippkptpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
