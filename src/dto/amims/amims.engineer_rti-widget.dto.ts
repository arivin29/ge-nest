import { ApiProperty } from '@nestjs/swagger';
import { AmimsEngineerRtiDto } from './amims.engineer_rti.dto';

export class AmimsEngineerRtiWidgetDto extends AmimsEngineerRtiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
