import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsssppirtDto } from './new_bpt.onl_osssppirt.dto';

export class NewBptOnlOsssppirtWidgetDto extends NewBptOnlOsssppirtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
