import { ApiProperty } from '@nestjs/swagger';
import { AmimsInspectionDto } from './amims.inspection.dto';

export class AmimsInspectionWidgetDto extends AmimsInspectionDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
