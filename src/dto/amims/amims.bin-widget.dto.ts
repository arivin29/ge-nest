import { ApiProperty } from '@nestjs/swagger';
import { AmimsBinDto } from './amims.bin.dto';

export class AmimsBinWidgetDto extends AmimsBinDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
