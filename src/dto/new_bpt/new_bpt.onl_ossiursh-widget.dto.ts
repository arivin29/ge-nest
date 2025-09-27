import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiurshDto } from './new_bpt.onl_ossiursh.dto';

export class NewBptOnlOssiurshWidgetDto extends NewBptOnlOssiurshDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
