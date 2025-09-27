import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiupikanDto } from './new_bpt.onl_ossiupikan.dto';

export class NewBptOnlOssiupikanWidgetDto extends NewBptOnlOssiupikanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
