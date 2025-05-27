import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartConditionDto } from './amims.part_condition.dto';

export class AmimsPartConditionWidgetDto extends AmimsPartConditionDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
