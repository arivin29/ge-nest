import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssspakDto } from './new_bpt.onl_ossspak.dto';

export class NewBptOnlOssspakWidgetDto extends NewBptOnlOssspakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
