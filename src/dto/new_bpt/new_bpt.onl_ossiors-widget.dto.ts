import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiorsDto } from './new_bpt.onl_ossiors.dto';

export class NewBptOnlOssiorsWidgetDto extends NewBptOnlOssiorsDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
