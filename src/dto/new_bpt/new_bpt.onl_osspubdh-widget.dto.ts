import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOsspubdhDto } from './new_bpt.onl_osspubdh.dto';

export class NewBptOnlOsspubdhWidgetDto extends NewBptOnlOsspubdhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
