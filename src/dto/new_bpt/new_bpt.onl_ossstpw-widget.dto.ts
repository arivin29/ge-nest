import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssstpwDto } from './new_bpt.onl_ossstpw.dto';

export class NewBptOnlOssstpwWidgetDto extends NewBptOnlOssstpwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
