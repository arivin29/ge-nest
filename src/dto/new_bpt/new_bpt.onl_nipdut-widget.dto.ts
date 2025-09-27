import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNipdutDto } from './new_bpt.onl_nipdut.dto';

export class NewBptOnlNipdutWidgetDto extends NewBptOnlNipdutDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
