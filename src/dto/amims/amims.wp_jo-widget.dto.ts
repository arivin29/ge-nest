import { ApiProperty } from '@nestjs/swagger';
import { AmimsWpJoDto } from './amims.wp_jo.dto';

export class AmimsWpJoWidgetDto extends AmimsWpJoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
