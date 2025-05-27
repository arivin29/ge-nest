import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerPmtrDto } from './amims.engineer_pmtr.dto';

export class AmimsEngineerPmtrWidgetDto extends AmimsEngineerPmtrDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
