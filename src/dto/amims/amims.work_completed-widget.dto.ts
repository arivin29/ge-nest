import { ApiProperty } from '@nestjs/swagger';
import { AmimsWorkCompletedDto } from './amims.work_completed.dto';

export class AmimsWorkCompletedWidgetDto extends AmimsWorkCompletedDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
