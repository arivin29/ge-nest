import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPmtrItemDto } from './amims.engineer_pmtr_item.dto';

export class AmimsEngineerPmtrItemWidgetDto extends AmimsEngineerPmtrItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
