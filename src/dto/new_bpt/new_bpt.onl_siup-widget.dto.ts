import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSiupDto } from './new_bpt.onl_siup.dto';

export class NewBptOnlSiupWidgetDto extends NewBptOnlSiupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
