import { ApiProperty } from '@nestjs/swagger';
import { AmimsInternalGrnDto } from './amims.internal_grn.dto';

export class AmimsInternalGrnWidgetDto extends AmimsInternalGrnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
