import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurReturnDto } from './amims.pur_return.dto';

export class AmimsPurReturnWidgetDto extends AmimsPurReturnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
