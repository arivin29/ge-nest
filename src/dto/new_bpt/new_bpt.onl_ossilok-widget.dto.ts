import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssilokDto } from './new_bpt.onl_ossilok.dto';

export class NewBptOnlOssilokWidgetDto extends NewBptOnlOssilokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
