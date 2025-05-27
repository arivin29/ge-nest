import { ApiProperty } from '@nestjs/swagger';
import { AmimsActypeDto } from './amims.actype.dto';

export class AmimsActypeWidgetDto extends AmimsActypeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
