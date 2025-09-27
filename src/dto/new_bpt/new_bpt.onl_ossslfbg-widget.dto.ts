import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssslfbgDto } from './new_bpt.onl_ossslfbg.dto';

export class NewBptOnlOssslfbgWidgetDto extends NewBptOnlOssslfbgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
