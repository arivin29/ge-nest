import { ApiProperty } from '@nestjs/swagger';
import { AmimsLogProcessDto } from './amims.log_process.dto';

export class AmimsLogProcessWidgetDto extends AmimsLogProcessDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
