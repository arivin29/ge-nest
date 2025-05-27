import { ApiProperty } from '@nestjs/swagger';
import { AmimsPositionDto } from './amims.position.dto';

export class AmimsPositionWidgetDto extends AmimsPositionDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
