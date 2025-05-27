import { ApiProperty } from '@nestjs/swagger';
import { AmimsMelDto } from './amims.mel.dto';

export class AmimsMelWidgetDto extends AmimsMelDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
