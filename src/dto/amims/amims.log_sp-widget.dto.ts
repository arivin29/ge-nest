import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogSpDto } from './amims.log_sp.dto';

export class AmimsLogSpWidgetDto extends AmimsLogSpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
