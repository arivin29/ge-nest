import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssspprtDto } from './new_bpt.onl_ossspprt.dto';

export class NewBptOnlOssspprtWidgetDto extends NewBptOnlOssspprtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
