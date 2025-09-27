import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNislhsjbDto } from './new_bpt.onl_nislhsjb.dto';

export class NewBptOnlNislhsjbWidgetDto extends NewBptOnlNislhsjbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
