import { ApiProperty } from '@nestjs/swagger';
import { NewBptOptimisSipitakIlokDto } from './new_bpt.optimis_sipitak_ilok.dto';

export class NewBptOptimisSipitakIlokWidgetDto extends NewBptOptimisSipitakIlokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
