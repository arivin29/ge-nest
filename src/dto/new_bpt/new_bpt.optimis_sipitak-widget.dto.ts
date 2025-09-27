import { ApiProperty } from '@nestjs/swagger';
import { NewBptOptimisSipitakDto } from './new_bpt.optimis_sipitak.dto';

export class NewBptOptimisSipitakWidgetDto extends NewBptOptimisSipitakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
