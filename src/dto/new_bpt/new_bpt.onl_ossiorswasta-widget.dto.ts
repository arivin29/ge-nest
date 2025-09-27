import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiorswastaDto } from './new_bpt.onl_ossiorswasta.dto';

export class NewBptOnlOssiorswastaWidgetDto extends NewBptOnlOssiorswastaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
