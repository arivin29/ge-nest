import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogUserDto } from './amims.log_user.dto';

export class AmimsLogUserWidgetDto extends AmimsLogUserDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
