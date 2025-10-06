import { ApiProperty } from '@nestjs/swagger';
import { AmimsWpDto } from './amims.wp.dto';

export class AmimsWpWidgetDto extends AmimsWpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
